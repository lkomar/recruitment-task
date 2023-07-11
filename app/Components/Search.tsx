'use client'

import { Dispatch, InputHTMLAttributes, SetStateAction } from 'react'

interface Props {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}

const Search = ({
  query,
  setQuery,
  ...props
}: Props & InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type="text"
    value={query}
    onChange={(event) => setQuery(event.target.value)}
    {...props}
  />
)

export default Search
