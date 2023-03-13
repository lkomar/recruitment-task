import { Category } from './types'
import { apiUrl } from './utils'
import Posts from './Posts'
import { PaginatedPosts } from './api/posts/route'

const getPosts = async (page?: number): Promise<PaginatedPosts> => {
  const response = await fetch(
    `${apiUrl}/api/posts${page ? `?page=${page}` : ''}`
  )

  return response.json()
}

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${apiUrl}/api/categories`)

  return response.json()
}

type Props = { searchParams: { page?: string } }

export default async function Home({ searchParams }: Props) {
  const page = parseInt(searchParams?.page ?? '1')

  const [categories, { posts, pages }] = await Promise.all([
    getCategories(),
    getPosts(page),
  ])

  return (
    <div>
      <div className="mb-4 flex flex-col items-center">
        <h1>From the blog</h1>
        <h4 className="max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          numquam tempora magnam.
        </h4>
      </div>
      <Posts
        categories={categories}
        posts={posts}
        page={page}
        maxPages={pages}
      />
    </div>
  )
}
