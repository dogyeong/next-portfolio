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

// This gets called on every request
export async function getServerSideProps() {
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
