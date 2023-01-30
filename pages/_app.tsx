import * as React from 'react';
import createEmotionCache from '@/src/createEmotionCache'
import '@/styles/globals.css'
import { CacheProvider, EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/src/theme';

const clientSideEmotionCache = createEmotionCache()

interface ExtendedAppProps extends AppProps {
    emotionCache?: EmotionCache
}

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: ExtendedAppProps) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}
