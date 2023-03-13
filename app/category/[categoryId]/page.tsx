import { notFound } from 'next/navigation'

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

  if (!posts.length) notFound()

  const category = categories.find(
    (category) => category.id === parseInt(params.categoryId)
  )

  return (
    <>
      <div className="mb-4 flex flex-col items-center">
        <h1>Posts for category {`"${category?.name}"`}</h1>
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
