import React from 'react'
import { connect } from 'react-redux'
import { getPaginationAction } from './modules/action'

function Pagination(props) {
    
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.info.totalProducts / props.info.productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-end mb-0">
                <li className="page-item">
                    <button
                        className="page-link"
                        type="button"
                        onClick={() => {
                            props.getClickPagination(props.currentPage > 1 ? (props.currentPage - 1) : 1);
                        }}
                    >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                    </button>
                </li>
                {pageNumbers.map(number => {
                    return (
                        <li
                            key={number}
                            className={
                                props.currentPage === number
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >
                            <button
                                className="page-link"
                                type="button"
                                onClick={() => {
                                    props.getClickPagination(number);
                                }}
                            >
                                {number}
                            </button>
                        </li>
                    )
                })}
                <li className="page-item">
                    <button
                        className="page-link"
                        type="button"
                        onClick={() => {
                            props.getClickPagination(props.currentPage + 1);
                        }}>
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        info: state.paginationReducer.info,
        currentPage: state.paginationReducer.paginate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getClickPagination: (paginate) => {
            dispatch(getPaginationAction(paginate));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);