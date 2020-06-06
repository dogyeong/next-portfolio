import Link from "next/link";
import Layout from "../components/Layout";

export default function About({ user }) {
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
    const data = await res.json()

    // Pass data to the page via props
    return { 
        props: { user: data } 
    }
}
