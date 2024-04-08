<script setup lang="ts">
import Color from 'colorjs.io'
import { computed, nextTick, onMounted, ref } from 'vue'
import {
  Button as TinyButton,
  FileUpload as TinyFileUpload,
  Row as TinyRow,
  Col as TinyCol,
  Select as TinySelect,
  Alert as TinyAlert
} from '@opentiny/vue'
import colorTypeSelect from './reference-colors'
interface IFile {
  name: string // 上传文件名
  percentage: string // 上传进度百分比
  raw: File // 原始文件信息
  size: number // 文件大小
  status: string // 上传状态
  uid: string // uid
  file: File
}

let currentExampleColors = ref<
  Array<{
    title: string
    values: Array<{ color: string; value: number }>
  }>
>([])
onMounted(() => {
  currentExampleColors.value = colorTypeSelect.referenceColor24
})
const colors = computed(() => {
  return currentExampleColors.value.map((item) => item.values.map((v) => v.color)).flat()
})
let closeColor = ref('')
const findCloseColor = (color: string) => {
  let closeColor = ''
  let minDifference = null
  let difference = 0
  const targetColor = new Color(color)
  for (let i = 0; i < colors.value.length; i++) {
    const currentColor = new Color(colors.value[i])
    difference = targetColor.deltaE(currentColor, '76')
    if (minDifference === null) {
      minDifference = difference
      closeColor = colors.value[i]
    } else if (difference < minDifference) {
      minDifference = difference
      closeColor = colors.value[i]
    }
  }
  return { closeColor, minDifference }
}
let selectColor = ref('')
const httpRequest = ref((file: IFile) => {
  const windowURL = window.URL || window.webkitURL
  const src = windowURL.createObjectURL(file.file)
  let imgElement = document.createElement('img')
  imgElement.src = src
  imgElement.onload = () => {
    const canvas = document.getElementById('canvas-container') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as any
    const imgRatio = imgElement.naturalWidth / imgElement.naturalHeight
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    const canvasRatio = canvas.width / canvas.height
    let scaledHeight = 0
    let scaledWidth = 0
    if (imgRatio > canvasRatio) {
      // 图片更宽，按宽度适应
      scaledWidth = canvas.width
      scaledHeight = imgElement.naturalHeight * (canvas.width / imgElement.naturalWidth)
    } else {
      // 图片更高，按高度适应
      scaledHeight = canvas.height
      scaledWidth = imgElement.naturalWidth * (canvas.height / imgElement.naturalHeight)
    }
    // const destX = (canvas.width - scaledWidth) / 2 // 中心对齐
    // const destY = (canvas.height - scaledHeight) / 2 // 中心对齐
    ctx.drawImage(imgElement, 0, 0, scaledWidth, scaledHeight)

    // 鼠标移动事件
    canvas.addEventListener('click', (event) => {
      const x = event.offsetX
      const y = event.offsetY

      // 获取鼠标所在位置的像素数据
      const imageData = ctx.getImageData(x, y, 1, 1)
      const pixelData = imageData.data

      // RGB颜色值分别位于data数组的第0、1、2个元素
      const red = pixelData[0]
      const green = pixelData[1]
      const blue = pixelData[2]
      selectColor.value = `rgb(${red},${green},${blue})`
      let res = findCloseColor(`rgb(${red},${green},${blue})`)
      closeColor.value = res.closeColor
    })
  }
})
const result = computed(() => {
  if (!closeColor.value)
    return {
      title: '',
      value: {
        value: 0
      }
    }
  let value = { color: '', value: 0 }
  const res = currentExampleColors.value.find((item) => {
    let index = item.values.findIndex(
      (v: { color: string; value: number }) => v.color === closeColor.value
    )
    value = item.values[index]
    return index > -1
  })!
  return {
    title: res.title,
    value
  }
})
const resultTextColor = (text: string) => {
  switch (text) {
    case '安全范围':
      return '#52c41a'
    case '轻度污染':
      return '#049171'
    case '中度污染':
      return '#faad14'
    case '重度污染':
      return '#f5222d'
    default:
      return ''
  }
}
const colorOptions = [
  {
    value: 'referenceColor24',
    label: '24色比色卡'
  },
  {
    value: 'carvisColors',
    label: '嘉维仕比色卡'
  },
  {
    value: 'referenceColor30',
    label: '30色比色卡'
  }
]
let colorType = ref('referenceColor24')
const colorTypeChange = (v: 'referenceColor24' | 'carvisColors' | 'referenceColor30') => {
  closeColor.value = ''
  currentExampleColors.value = colorTypeSelect[v]
}
</script>

<template>
  <tiny-row style="padding: 16px">
    <tiny-col :lg="8" :md="8" :sm="12" :xl="8">
      <tiny-file-upload
        action="/"
        accept=".png,.jpeg,.jpg"
        :show-file-list="false"
        :http-request="httpRequest"
      >
        <template #trigger>
          <tiny-button type="primary">选取文件</tiny-button>
        </template>
      </tiny-file-upload>
      <canvas id="canvas-container"></canvas>
    </tiny-col>
    <tiny-col style="overflow: auto" :lg="4" :md="4" :sm="12" :xl="4">
      <div>
        <div>比色卡类型：</div>
        <br />
        <TinySelect
          v-model="colorType"
          :options="colorOptions"
          @change="colorTypeChange"
        ></TinySelect>
        <div v-for="item in currentExampleColors" :key="item.title">
          <div :style="{ color: resultTextColor(item.title) }">{{ item.title }}</div>
          <div class="color-container">
            <div v-for="v in item.values" :key="v.color">
              <div
                :class="['color-items', closeColor === v.color ? 'active-color' : '']"
                :style="{ backgroundColor: v.color }"
              ></div>
              <div class="color-value">
                {{ v.value }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-if="result.title">
        <div class="align-center select-color">
          <span>选中颜色：</span>
          <div
            class="color-items"
            :style="{ background: selectColor, display: 'inline-block' }"
          ></div>
        </div>
        <tiny-alert :closable="false" title="结果" :show-icon="false" size="large">
          <template #description>
            <span :style="{ color: resultTextColor(result.title) }">{{ result.title }}，</span>
            <span>接近值：{{ result.value.value }}</span>
          </template>
        </tiny-alert>
      </template>
    </tiny-col>
  </tiny-row>
</template>

<style scoped>
.color-container {
  display: flex;
  flex-wrap: wrap;
}
.color-items {
  width: 50px;
  height: 50px;
}
.color-value {
  text-align: center;
}
.active-color {
  transform: scale(1.2);
  border: 4px solid #096dd9;
}
.result {
  font-size: 20px;
  font-weight: bold;
}
#canvas-container {
  margin: 8px 0;
  width: 100%;
  height: 100%;
  min-height: 800px;
}
.align-center {
  display: flex;
  align-items: center;
}
.select-color {
  margin-bottom: 8px;
}
</style>
