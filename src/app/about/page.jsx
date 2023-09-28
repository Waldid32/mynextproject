"use client"
import { useRouter } from 'next/navigation'


export default function AboutPage() {
    const router = useRouter()
    return (
        <section>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ad error rem, eum minima recusandae ea enim dolorum, eaque quae assumenda. Consectetur eaque ab aut hic earum sunt, iure ad?</p>
            <button
                className="bg-sky-400 px-3 py-2 rounded-md"
                onClick={() => {
                    router.push('/')
                }}
            >
                Click
            </button>
        </section>
    )
}