'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import SidebarWithHeader from '../app/Sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <SidebarWithHeader>
              {children}
            </SidebarWithHeader>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}