'use client'

import { Category } from '@/app/api/categories/route'
import { Post } from '@/app/api/posts/route'
import { useState } from 'react'

import Card from './Card'
import Pagination from './Pagination'
import Search from './Search'
import { filterCollection, getPostCategoryNames } from './utils'

interface Props {
  categories: Category[]
  posts: Post[]
  page: string
  maxPages: string
}

const Posts = ({ categories, posts, page, maxPages }: Props) => {
  const [query, setQuery] = useState('')
  const filteredPosts = filterCollection(query, posts, 'title')

  const categoryNames = (categoryIds: number[]) =>
    getPostCategoryNames(categoryIds, categories)

  return (
    <>
      <div className="mb-8 flex justify-center">
        <Search
          query={query}
          setQuery={setQuery}
          placeholder="Search posts"
          className="w-1/2 rounded-md border-[1px] border-solid border-sky-600 px-4 py-2 text-black dark:border-2 dark:border-sky-700 dark:bg-gray-200"
        />
      </div>
      <Pagination page={parseInt(page)} maxPages={parseInt(maxPages)} />
      {filteredPosts.length ? (
        <div className="grid grid-cols-fit justify-center gap-8 p-12">
          {filteredPosts.map((post) => (
            <Card
              {...post}
              key={post.id}
              categoryNames={categoryNames(post.categories)}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center p-12">No hits</div>
      )}
      <Pagination
        page={parseInt(page)}
        maxPages={parseInt(maxPages)}
        classNames="mb-4"
      />
    </>
  )
}

export default Posts
