import { NextResponse } from "next/server";


export async function GET(resquest, { params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
    const data = await res.json()

    return NextResponse.json(data)
}