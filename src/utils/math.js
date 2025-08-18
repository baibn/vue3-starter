// src/utils/math.js —— ES2023 语法 showcase
export const sum = (...nums) => nums.reduce((a, b) => a + b, 0)

export const delay = (ms) => new Promise((r) => setTimeout(r, ms))

// 新加：首字母大写
export const capitalize = (str = '') =>
  // eslint-disable-next-line no-constant-binary-expression
  str?.charAt(0)?.toUpperCase() + str?.slice(1) ?? ''

// 新加：并行请求结果收集
export const fetchAll = async (urls = []) => {
  const results = await Promise.allSettled(
    urls.map((url) => fetch(url).then((r) => r.json())),
  )
  // 只返回成功的数据
  return results
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value)
}
