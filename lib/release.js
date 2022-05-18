const path = require('path')
const { move, remove } = require('./file-tool')

const root = path.resolve(__dirname, '..')

// 删除js、css等文件
remove(`${root}/js`)
remove(`${root}/css`)

// 将新的文件迁移
move(`${root}/dist`, root)
