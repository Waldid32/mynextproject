"use client"

import Link from "next/link"


// RCC
function PostCard({ post }) {
    return (
        <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <h4>{post.id}. {post.title}</h4>
            </Link>
            <p>{post.body}</p>
            <button onClick={() => alert('Funciona')}>
                Click
            </button>
        </div>
    )
}

export default PostCard