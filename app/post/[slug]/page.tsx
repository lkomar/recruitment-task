import Image from 'next/image'
import { notFound } from 'next/navigation'

import { DynamicPage } from '@/app/types'
import { getCategories, getPostBySlug } from '@/app/api'
import { getPostCategoryNames } from '@/app/utils'

interface Props {
  slug: string
}

const PostDetails = async ({ params }: DynamicPage<Props>) => {
  const [post, categories] = await Promise.all([
    getPostBySlug(params.slug),
    getCategories(),
  ])

  const categoryNames = getPostCategoryNames(post.categories, categories)

  if (!Object.keys(post).length) notFound()

  return (
    <div className="mt-10 ml-auto mr-auto flex max-w-3xl flex-col justify-center gap-8">
      <h1 className="self-center">{post.title}</h1>
      <Image
        src={post.imageUrl}
        alt={post.slug}
        width="0"
        height="0"
        sizes="100vw"
        className="h-auto w-fit self-center"
      />
      <p>{post.excerpt}</p>
      {categoryNames.map((name, index) => (
        <span className="text-blue-800 dark:text-indigo-300" key={index}>
          {name}
        </span>
      ))}
    </div>
  )
}

export default PostDetails
