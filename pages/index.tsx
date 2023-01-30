import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '@/components/layout/layout'
import Container from '@/components/layout/container'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Layout>
                <Container>
                    <Typography>Hello</Typography>
                </Container>
            </Layout>
        </>
    )
}
