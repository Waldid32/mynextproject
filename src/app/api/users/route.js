import { NextResponse } from 'next/server'


export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data)
}


export function POST() {

    return NextResponse.json({
        message: "Creando datos"
    })
}


export function PUT() {

    return NextResponse.json({
        message: "Actualizando datos"
    })
}

export function DELETE() {

    return NextResponse.json({
        message: "Eliminando datos"
    })
}