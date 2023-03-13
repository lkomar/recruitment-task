import { Category } from '@/app/api/categories/route'
import Link from 'next/link'

interface Props {
  categories: (Category & { selected: boolean })[]
}

const CategoryFilter = ({ categories }: Props) => (
  <div className="flex justify-center">
    {categories.map((category) => (
      <Link
        key={category.id}
        className={`${
          category.selected
            ? 'border-none bg-blue-800 py-1 px-4 text-white dark:bg-indigo-700'
            : 'border-2 border-solid border-blue-800 py-0.5 px-3 text-blue-800 dark:border-indigo-300 dark:text-white'
        } mx-2 mb-4 self-center rounded-3xl`}
        href={category.selected ? `/` : `/category/${category.id}`}
      >
        {category.name}
      </Link>
    ))}
  </div>
)

export default CategoryFilter
