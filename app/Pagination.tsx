'use client'

import StyledLink from './StyledLink'
import DisabledButton from './DisabledButton'
import { apiUrl } from './utils'

interface Props {
  page: number
  maxPages: number
  classNames?: string
}

const Pagination = ({ page, maxPages, classNames }: Props) => (
  <div
    className={`flex content-center justify-center ${
      classNames ? classNames : ''
    }`}
  >
    {page > 1 ? (
      <StyledLink href={`${apiUrl}/?page=${page - 1}`}>Prev</StyledLink>
    ) : (
      <DisabledButton>Prev</DisabledButton>
    )}
    <span className="self-center">
      {page} / {maxPages}
    </span>
    {page < maxPages ? (
      <StyledLink href={`${apiUrl}/?page=${page + 1}`}>Next</StyledLink>
    ) : (
      <DisabledButton>Next</DisabledButton>
    )}
  </div>
)

export default Pagination
