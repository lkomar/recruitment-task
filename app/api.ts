import { Category } from './api/categories/route'
import { PaginatedPosts, Post } from './api/posts/route'
import { apiUrl } from './utils'

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${apiUrl}/api/categories`)

  return response.json()
}

export const getPosts = async (page?: string): Promise<PaginatedPosts> => {
  const response = await fetch(
    `${apiUrl}/api/posts${page ? `?page=${page}` : ''}`
  )

  return response.json()
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const response = await fetch(`${apiUrl}/api/post/${slug}`)

  return response.json()
}

export const getPostsByCategoryId = async (
  categoryId: string,
  page?: string
): Promise<PaginatedPosts> => {
  const response = await fetch(
    `${apiUrl}/api/postsByCategoryId/${categoryId}${
      page ? `?page=${page}` : ''
    }`
  )

  return response.json()
}
