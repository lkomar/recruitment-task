import { DynamicPage } from '@/app/types'
import { getCategories, getPostsByCategoryId } from '@/app/api'
import Posts from '@/app/Posts'

interface Props {
  categoryId: string
  searchParams: { page?: string }
}

const CategoryPosts = async ({
  params,
  searchParams,
}: DynamicPage<Props> & Pick<Props, 'searchParams'>) => {
  const page = searchParams?.page ?? '1'

  const [categories, { posts, pages }] = await Promise.all([
    getCategories(),
    getPostsByCategoryId(params.categoryId, page),
  ])

  return (
    <>
      <div className="mb-4 flex flex-col items-center">
        <h1>Posts for category {`"${params.categoryId}"`}</h1>
      </div>
      <Posts
        categories={categories}
        posts={posts}
        page={page}
        maxPages={pages.toString()}
      />
    </>
  )
}

export default CategoryPosts
