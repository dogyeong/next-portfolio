import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({ title }) => (
    <li>
        <Link href={`post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
)

const Blog = () => (
    <Layout title="My Blog">
        <ul>
            <PostLink title="react" />
            <PostLink title="angular" />
        </ul>
    </Layout>
)

export default Blog