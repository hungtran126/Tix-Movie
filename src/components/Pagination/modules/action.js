import * as ActionType from './constants';

export const getPaginationAction = (paginate) => {
    return dispatch => {
        dispatch(actPaginationClick(paginate));
    }
}

export const getInformationPagination = (productsPerPage, totalProducts) => {
    return dispatch => {
        dispatch(actPaginationInformation(productsPerPage, totalProducts));
    }
}

const actPaginationInformation = (productsPerPage, totalProducts) => {
    return {
        type: ActionType.PAGINATION_REQUEST,
        payload: { productsPerPage, totalProducts }
    }
}

const actPaginationClick = (paginate) => {
    return {
        type: ActionType.PAGINATION_REQUEST1,
        payload: paginate
    }
}

const actPaginationFailed = (err) => {
    return {
        type: ActionType.PAGINATION_REQUEST2,
        payload: err
    }
}

