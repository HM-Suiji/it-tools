export const toLine = (str: string) =>
  str.replace(/([A-Z])/g, '-$1').toLowerCase()

export const toCamel = (str: string) =>
  str
    .split('_')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

export const toUnderline = (str: string) =>
  str.replace(/([A-Z])/g, '_$1').toLowerCase()

export const trimmedStringToLength = (input: string, length: number) => {
  if (input.length > length) {
    const subStr = input.substring(0, length)
    return `${subStr}...`
  }
  return input
}

export const simpleHash = (str: string) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i)
  }
  return hash % 100
}
