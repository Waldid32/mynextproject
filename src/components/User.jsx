"use client"
import { useEffect } from 'react'


export default function User() {

    useEffect(() => {
        alert('Cargo')
    }, [])

    return (
        <div>
            <h1>Client</h1>
        </div>
    )
}
