import React from 'react'
import { Link } from 'react-router'

const Dashboard = () => {
    return (
        <>
            <h1>Page Dashboard</h1>
            <button>
                <Link to="/">Retornar</Link>
            </button>
        </>
    )
}

export default Dashboard
