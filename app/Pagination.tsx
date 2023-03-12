'use client'

import { redirect } from 'next/navigation'

import Button from './Button'
import { apiUrl } from './utils'

interface Props {
  page: number
  maxPages: number
}

const Pagination = ({ page, maxPages }: Props) => {
  const handlePreviousClick = () => {
    if (page > 1) {
      window.location.href = `${apiUrl}/?page=${page - 1}`
    }
  }

  const handleNextClick = () => {
    if (page < maxPages) {
      window.location.href = `${apiUrl}/?page=${page + 1}`
    }
  }

  return (
    <div className="flex content-center justify-center">
      <Button disabled={page === 1} onClick={handlePreviousClick}>
        Prev
      </Button>
      <span className="self-center">
        {page} / {maxPages}
      </span>
      <Button disabled={page === maxPages} onClick={handleNextClick}>
        Next
      </Button>
    </div>
  )
}

export default Pagination
