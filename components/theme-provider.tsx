'use client'

import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <GeistProvider>
        <CssBaseline />
        {children}
      </GeistProvider>
    </NextThemesProvider>
  )
}
