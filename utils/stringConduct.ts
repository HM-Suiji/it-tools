export const toLine = (str: string) =>
  str.replace(/([A-Z])/g, '-$1').toLowerCase()

export const trimmedStringToLength = (input: string, length: number) => {
  if (input.length > length) {
    const subStr = input.substring(0, length)
    return `${subStr}...`
  }
  return input
}
