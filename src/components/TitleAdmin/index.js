import React from 'react'
import { connect } from 'react-redux';

function TitleAdmin(props) {
    return (
        <>
            {props.titlee ? props.titlee : "Người dùng"}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        titlee: state.adminTitleReducer.title
    }
}

export default connect(mapStateToProps, null)(TitleAdmin);
