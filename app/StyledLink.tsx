'use client'

import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

const Button = ({
  children,
  ...props
}: LinkProps & { children: ReactNode }) => (
  <Link
    className="mx-4 cursor-pointer rounded-lg border-2 border-solid border-sky-600 px-2 py-1"
    {...props}
  >
    {children}
  </Link>
)

export default Button
