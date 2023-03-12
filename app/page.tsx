import Card from './Card'
import { Category, Post } from './types'
import { getPostCategoryNames } from './utils'
import { PaginatedPosts } from './api/posts/route'

const url = `http://${process.env.HOST || 'localhost'}:${
  process.env.PORT ?? '3000'
}`

const getPosts = async (page?: number): Promise<PaginatedPosts> => {
  // const response = await fetch(`${url}/api/posts${page ? `?page=${page}` : ''}`)
  const response = await fetch(`${url}/api/posts?page=1`)

  return response.json()
}

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${url}/api/categories`)

  return response.json()
}

export default async function Home() {
  const { posts /* , pages */ } = await getPosts()
  const categories = await getCategories()

  const categoryNames = (categoryIds: number[]) =>
    getPostCategoryNames(categoryIds, categories)

  return (
    <div>
      <div className="mb-4 flex flex-col items-center">
        <h1>From the blog</h1>
        <h4 className="max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          numquam tempora magnam.
        </h4>
      </div>
      <div className="grid grid-cols-fit justify-center gap-8 p-12">
        {posts.map((post) => (
          <Card
            {...post}
            key={post.id}
            categoryNames={categoryNames(post.categories)}
          />
        ))}
      </div>
    </div>
  )
}
