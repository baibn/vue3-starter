import { describe, expect, test } from 'vitest'
import { sum, capitalize, fetchAll } from './math'

describe('sum', () => {
  test('sum(1,2,3) = 6', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })
})

describe('capitalize', () => {
  test('capitalize vue -> Vue', () => {
    expect(capitalize('vue')).toBe('Vue')
  })
  test('empty string', () => {
    expect(capitalize('')).toBe('')
  })
})

describe('fetchAll', () => {
  test('returns only fulfilled', async () => {
    const fakeUrls = [
      'https://jsonplaceholder.typicode.com/todos/1',
      'https://jsonplaceholder.typicode.com/todos/2',
      'https://bad.url/404', // 会失败
    ]
    const data = await fetchAll(fakeUrls)
    expect(data).toHaveLength(2)
    expect(data[0]).toHaveProperty('id')
  })
})
