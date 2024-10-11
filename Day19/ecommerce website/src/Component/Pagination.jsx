import React from 'react'

export default function Pagination({ page, incPage }) {
    return (
        <div>
            <button disabled={page <= 1} onClick={() => incPage(page - 1)} >Prev</button>
            <button>{page}</button>
            <button onClick={() => incPage(page + 1)}>Next</button>
        </div>
    )
}
