const DisabledButton = ({
  children,
  ...props
}: {
  children: React.ReactNode
}) => (
  <button
    className="mx-4 cursor-not-allowed rounded-lg border-2 border-solid border-gray-700 bg-gray-500 px-2 py-1 text-gray-900"
    {...props}
  >
    {children}
  </button>
)

export default DisabledButton
