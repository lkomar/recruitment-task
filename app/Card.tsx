import Image from 'next/image'
import Link from 'next/link'

import { Post } from './types'

type Props = Post & { categoryNames: (string | undefined)[] }

const Card = ({ id, title, excerpt, imageUrl, slug, categoryNames }: Props) => {
  return (
    <Link
      href={`/post/${id}`}
      className="grid overflow-hidden rounded-2xl border-2 border-solid border-gray-300 shadow-[0.2rem_0.2rem_0.8rem_rgba(0,0,0,0.2)] dark:border-gray-400 dark:shadow-cyan-900"
    >
      <Image
        src={imageUrl}
        alt={slug}
        width="0"
        height="0"
        sizes="100vw"
        className="h-64 w-full object-cover"
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
