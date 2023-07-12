import { Category } from '@/app/api/categories/route'
import { env } from '@/app/env'

const ITEMS_PER_PAGE = 15

export const getPostCategoryNames = (
  categoryIds: number[],
  categories: Category[]
): (string | undefined)[] =>
  categoryIds.map(
    (id) => categories.find((category) => category.id === id)?.name
  )

/**
 * I'm aware that searchKey: keyof T isn't bulletproof, but I didn't want to
 * write a humongous generic to determine if for a given object's key a value
 * is a string
 */
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

export const paginationUtils = {
  limit: ITEMS_PER_PAGE,
  offset: (page: number) => page * ITEMS_PER_PAGE,
}
