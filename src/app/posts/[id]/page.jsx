import Post from '../page'
import { Suspense } from 'react'


async function loadPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export default async function Page({ params }) {

    const post = await loadPost(params.id)

    return (
        <div>
            <h2>{post.id}. {post.title}</h2>
            <p>{post.body}</p>

            <hr />
            <h3>Otras Publicaciones</h3>
            <Suspense fallback={<div>Cargando publicaciones...</div>}>
                <Post />
            </Suspense>
        </div>
    )
}
