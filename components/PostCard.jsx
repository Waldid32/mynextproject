"use client"

// RCC
function PostCard({ post }) {
    return (
        <div key={post.id}>
            <h4>{post.id}. {post.title}</h4>
            <p>{post.body}</p>
            <button onClick={() => alert('Funciona')}>
                Click
            </button>
        </div>
    )
}

export default PostCard