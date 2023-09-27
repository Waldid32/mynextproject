"use client"

import Link from "next/link"


// RCC
function PostCard({ post }) {
    return (
        <div className="bg-gray-950 p-10">
            <Link href={`/posts/${post.id}`}>
                <h4 className="text-2xl font-bold mb-4">{post.id}. {post.title}</h4>
            </Link>
            <p className="text-slate-300">{post.body}</p>
            <button onClick={() => alert('Funciona')}>
                Click
            </button>
        </div>
    )
}

export default PostCard