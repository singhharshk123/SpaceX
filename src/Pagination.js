import React from 'react';
import './Pagination.css'
function Pagination ({postPerPage , totalPosts , paginate}) {

    const pageNumbers = [];

    for (let i=1 ; i<= Math.ceil(totalPosts/postPerPage) ; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="numbers">
            <ul className='pagination'>
                {
                    pageNumbers.map((numbers) => (
                        <li key={numbers} className="page-item">
                            <a onClick={()=>paginate(numbers)} href='!#' className='page-link'>
                                {numbers}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Pagination;