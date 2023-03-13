import { Category } from '@/app/api/categories/route'

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

export const filterCollection = <T extends {}>(
  query: string,
  collection: T[],
  searchKey: keyof T
): T[] => {
  if (!query) return collection

  const filteredCollection = collection.filter(
    (item) =>
      (item[searchKey] as string).toLowerCase().indexOf(query.toLowerCase()) !==
      -1
  )

  return filteredCollection
}
