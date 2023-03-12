import { Category } from './types'
import { apiUrl } from './utils'
import Posts from './Posts'

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${apiUrl}/api/categories`)

  return response.json()
}

export default async function Home() {
  const categories = await getCategories()

  return (
    <div>
      <div className="mb-4 flex flex-col items-center">
        <h1>From the blog</h1>
        <h4 className="max-w-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          numquam tempora magnam.
        </h4>
      </div>
      <Posts categories={categories} />
    </div>
  )
}
