import Posts from './Posts'
import { getCategories, getPosts } from './api'

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
