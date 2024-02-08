type generateKeyFunc<T> = (item: T) => T[keyof T]

/**
 * @author Suiji
 * @function 数据分组
 * 根据不同类型分组
 * @example
 * groupBy(persons, (item) => item.age)
 * groupBy(persons, 'age')
 */
export const groupBy = <T extends Object>(
  arr: Array<T>,
  generateKey: keyof T | generateKeyFunc<T>,
): Record<string, T[]> => {
  const result: Record<string, T[]> = {}
  if (typeof generateKey === 'string') {
    let tmp = generateKey
    generateKey = (item: T) => item[tmp]
  }
  for (const person of arr) {
    const key = (generateKey as generateKeyFunc<T>)(person) as string
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(person)
  }
  return result
}
