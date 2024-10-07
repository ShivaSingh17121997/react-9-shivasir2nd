import React from 'react'

export default function Pagination({ page, incPage }) {
    console.log(page)
    return (
        <div>
            <button onClick={() => incPage(page - 1)} >Prev</button>
            <button>{page}</button>
            <button onClick={() => incPage(page + 1)}>Next</button>
        </div>
    )
}
