'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import SidebarWithHeader from '@/app/Sidebar'
import Navbar from '@/app/Navbar'
import Footer from '@/app/Footer'

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
            <Navbar>
              {children}
              <Footer />
            </Navbar>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}