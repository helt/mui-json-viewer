import dynamic from 'next/dynamic'

/**
 * Ensures that its children are rendered on client side only.
 */
export const ClientOnly = dynamic(
  () =>
    Promise.resolve(({ children }: React.PropsWithChildren) => {
      return children
    }),
  {
    ssr: false
  }
)
