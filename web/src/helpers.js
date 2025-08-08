export function difference (a, b) {
  const bSet = new Set(b)
  return a.filter((item) => !bSet.has(item))
}

export function choice (arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
