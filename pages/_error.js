import Layout from '../components/Layout'

export default ({ statusCode }) => (
    <Layout title="Error">
        <p>
            {
                statusCode 
                ? `Could not load user data : ${statusCode}` 
                : `couldn't get page, sorry!`
            }
        </p>
    </Layout>
)