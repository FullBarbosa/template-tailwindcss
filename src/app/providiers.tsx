import { ClientProvider } from '@/context'
import { PropsWithChildren } from 'react'

export function Providers({ children }: PropsWithChildren) {
  return <ClientProvider>{children}</ClientProvider>
}
