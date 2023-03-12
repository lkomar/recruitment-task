export interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  imageUrl: string
  categories: number[]
}

export interface Category {
  id: number
  name: string
  slug: string
}

export interface DynamicPage<T extends {}> {
  params: T
}
