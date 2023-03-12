'use client'

import { ButtonHTMLAttributes } from 'react'

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="mx-4 cursor-pointer rounded-lg border-2 border-solid border-sky-600 px-2 py-1 disabled:cursor-not-allowed disabled:border-gray-700 disabled:bg-gray-500 disabled:text-gray-900"
    {...props}
  >
    {children}
  </button>
)

export default Button
