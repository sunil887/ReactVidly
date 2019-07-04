import React  from 'react';
import  _ from 'lodash' 
import PropTypes from 'prop-types'

const Pagination = (props) => {

    const { count , perPageCount, onPageChange, currentPage} = props;

    const noOfPages = Math.ceil(count / perPageCount);
   
    
    if( noOfPages === 1 )
    return null;

    const pages = _.range(1,noOfPages+1)
    
    return ( <div>
                <nav aria-label="Page navigation example">
                        <ul className="pagination">
                       {
                            pages.map((page) => 
                                    { return <li key = {page} 
                                            className={ page === currentPage? "page-item active" : "page-item" }
                                            onClick = {  ()=> onPageChange(page) }>
                                                <a className="page-link">{page}
                                                </a>
                                            </li>
                                    }

                                )       
                        }                     
                        </ul>
                    </nav>
             </div>);
}

Pagination.propTypes = {
        count : PropTypes.number.isRequired,
        perPageCount : PropTypes.number.isRequired,
        onPageChange : PropTypes.func,
        currentPage  : PropTypes.number
};

export default Pagination;