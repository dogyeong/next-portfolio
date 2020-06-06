import Link from 'next/link'
import Layout from '../components/Layout'

const index = () => (
    <Layout title="Home">
        <Link href="/about">
            <a>Go to about</a>
        </Link>
    </Layout>
)

export default index