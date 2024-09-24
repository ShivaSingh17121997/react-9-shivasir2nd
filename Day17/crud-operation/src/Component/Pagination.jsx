import React from 'react'

export default function Pagination({ page, totalPage, setPage }) {
    return (
        <div>
            <button disabled={page <= 1} onClick={(e) => setPage(page - 1)} >Prev</button>
            <button>{page}</button>
            <button disabled={page === Math.ceil(totalPage.length / 2)} onClick={(e) => setPage(page + 1)} >Next</button>
        </div>
    )
}
