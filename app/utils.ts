import { Category } from './types'

export const getPostCategoryNames = (
  categoryIds: number[],
  categories: Category[]
): (string | undefined)[] =>
  categoryIds.map(
    (id) => categories.find((category) => category.id === id)?.name
  )

export const apiUrl = `http://${process.env.HOST || 'localhost'}:${
  process.env.PORT ?? '3000'
}`
