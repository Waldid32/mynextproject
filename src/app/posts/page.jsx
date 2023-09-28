import PostCard from '@/components/PostCard'
import "./Posts.css"

async function loadPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    // await new Promise((resolve) => setTimeout(resolve, 5000))

    return data
}

// RSC
export default async function PostPage() {
    const posts = await loadPost()
    return (
        <div className="grid">
            {
                posts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))
            }
        </div>
    )
}

