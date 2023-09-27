import Link from "next/link";

export default function NotFound() {
    return <section>
        <h1>404</h1>
        <p>Pagina no encontrada</p>
        <Link href="/">Volver</Link>
    </section>
}