// 格式化时间
export function formatDate(val, defaultVal = '') {
  let date = val

  try {
    // 针对YYYYMMdd适配
    if (typeof val === 'string' && val.length === 8) {
      date = `${val.substring(0, 4)}-${val.substring(4,6)}-${val.substring(6,8)}`
    }

    date = Date.parse(date)
  } catch(err) {
    // ignore
  }

  return isNaN(date) ? defaultVal : date
}
