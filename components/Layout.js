import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ children, title }) => (
    <div className="root">
        <Head>
            <title>Next Portfolio</title>
        </Head>

        <header>
            <Link href="/"><a>Home</a></Link>    
            <Link href="/about"><a>About</a></Link>    
            <Link href="/hireme"><a>Hire Me</a></Link>
            <Link href="/blog"><a>Blog</a></Link>    
        </header>  

        <h1>{title}</h1>
        {children}
    
        <footer>
            &copy; {new Date().getFullYear()}
        </footer>
        
        <style jsx>{`
            .root {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            header {
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 1em;
                font-size: 1.2rem;
                background: coral;
            }
            header a {
                color: white;
                text-decoration: none;
            }
            header a:hover {
                font-weight: bold;
            }
            footer {
                padding: 1em;
            }
        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
                padding: 0;
                font-size: 18px;
                background: #fafafd;
                color: #333;
            }
            /* spinner 가 디폴트로 오른쪽 상단에 위치하기 때문에 중앙으로 정렬해 준다 */
            #nprogress .spinner {
                top: 50%;
                right: 50%;
            }
        `}</style>
    </div>
)