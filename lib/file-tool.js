const fs = require('fs')

// 获取文件（夹）名称
function getName(path) {
  const splitedPath = path.split('/')

  return splitedPath.pop() || splitedPath.pop()
}

// 创建文件夹
function mkdir(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}

// 删除文件/文件夹
function remove(path) {
  if (!fs.existsSync(path)) {
    return
  }

  // 删除文件
  if (fs.statSync(path).isFile()) {
    fs.unlinkSync(path)
    return
  }

  // 删除文件夹
  fs.readdirSync(path).forEach(file => {
    remove(`${path}/${file}`)
  })
  fs.rmdirSync(path)
}

// 复制文件
function copy(source, destPath) {
  if (!fs.existsSync(source)) {
    console.warn(`The file ${source} to be copyed is not exists`)
    return
  }

  if (fs.statSync(source).isFile()) {
    const newDestFile = `${destPath}/${getName(source)}`
    fs.writeFileSync(newDestFile, fs.readFileSync(source))
  } else {
    fs.readdirSync(source).forEach(file => {
      const newSource = `${source}/${file}`

      if (fs.statSync(newSource).isFile()) {
        copy(newSource, destPath)
      } else {
        const newDestPath = `${destPath}/${file}`
        mkdir(newDestPath)

        copy(newSource, newDestPath)
      }
    })
  }
}

// 剪切/移动文件
function move(source, destPath) {
  copy(source, destPath)
  remove(source)
}

exports = module.exports = {
  move,
  copy,
  remove,
}
