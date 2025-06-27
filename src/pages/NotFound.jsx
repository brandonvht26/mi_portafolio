import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <>
            <h1>Page Not Found</h1>
            <button>
                <Link to="/">Retornar</Link>
            </button>
        </>
    )
}

export default NotFound
