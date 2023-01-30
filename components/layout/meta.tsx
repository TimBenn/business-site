import Head from 'next/head'

type Props = {}

const Meta = (props: Props) => {
    return (
        <Head>
            <meta
                name="description"
                content={`A site.`}
            />
        </Head>
    )
}

export default Meta