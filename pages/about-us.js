import React from 'react'
import Breadcrumbs from '../components/Breadcrumb'

export default function AboutUs({data}) {
    return (
        <section class="inner-page">
            <div class="container">
                <h1>{data?.about?.title}</h1>
                <img src={data?.about?.image} alt={data?.about?.title} className="img-fluid" />
                <p dangerouslySetInnerHTML={{ __html: data?.about?.content }} />
            </div>
        </section>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://justfields.com/project/Doy374y8/json')
    const data = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            data,
        },
    }
}
