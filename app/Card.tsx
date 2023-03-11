'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Post } from './types'

type Props = Post & { categoryNames: (string | undefined)[] }

const Card = ({ id, title, excerpt, imageUrl, slug, categoryNames }: Props) => {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  return (
    <Link
      href={`/post/${id}`}
      className="grid overflow-hidden rounded-2xl shadow-[0.2rem_0.2rem_0.8rem_rgba(0,0,0,0.2)] dark:shadow-cyan-900"
    >
      <Image
        // I would normally add a local asset to make sure it always renders, but seems slightly overkill in this case
        src={!error ? imageUrl : 'https://placehold.co/600x400/jpeg'}
        alt={slug}
        width="0"
        height="0"
        sizes="100vw"
        className="h-64 w-full object-cover"
        onError={handleError}
      />
      <div className="p-4">
        <div className="flex flex-wrap gap-x-2">
          {categoryNames.map((name, index) => (
            <span className="text-blue-800 dark:text-indigo-300" key={index}>
              {name}
            </span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </Link>
  )
}

export default Card
