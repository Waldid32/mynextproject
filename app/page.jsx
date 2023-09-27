import User from '../components/User'

export const metadata = {
    title: 'Mi Pagina especial'
}

export default function HomePage() {
    return (
        // Server component
        <section>
            {/* Client component */}
            <User />
        </section>
    )
}
