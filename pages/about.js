import Layout from "../components/Layout"
import Error from './_error'

export default function About({ user, statusCode }) {
    if (statusCode > 200) {
        return (
            <Error statusCode={statusCode} />
        )
    }

    return (
        <Layout title="About">
            <p>{user.name}</p>
            <img 
                src={user.avatar_url}
                height="200px"
                alt="dogyeong" 
            />
        </Layout>
    );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/users/dogyeong`)
    const statusCode = res.status
    const data = await res.json()

    // Pass data to the page via props
    return { 
        props: { 
            user: data,
            statusCode,
        } 
    }
}
