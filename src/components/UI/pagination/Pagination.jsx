import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let PagesArray = getPagesArray(totalPages);
    return (

            <div className='page__wrapper'>
                {PagesArray.map(p =>
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? 'page page_current' : 'page'}>
                      {p}
                  </span>
                )}

            </div>

    );
};

export default Pagination;