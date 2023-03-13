import Card from './Card'
import Pagination from './Pagination'
import { Category, Post } from './types'
import { getPostCategoryNames } from './utils'

interface Props {
  categories: Category[]
  posts: Post[]
  page: number
  maxPages: number
}

const Posts = ({ categories, posts, page, maxPages }: Props) => {
  const categoryNames = (categoryIds: number[]) =>
    getPostCategoryNames(categoryIds, categories)

  return (
    <>
      <Pagination page={page} maxPages={maxPages} />
      <div className="grid grid-cols-fit justify-center gap-8 p-12">
        {posts.map((post) => (
          <Card
            {...post}
            key={post.id}
            categoryNames={categoryNames(post.categories)}
          />
        ))}
      </div>
      <Pagination page={page} maxPages={maxPages} classNames="mb-4" />
    </>
  )
}

export default Posts
