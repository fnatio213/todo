import React from "react";
import {Navigate} from "react-router-dom"
import { useSelector, connect } from "react-redux";

function ProtectedRoute({children, users}) {
    if (!todo) {
        return <Navigate to="/login" replace="true"/>
    }
    return children;
}

const mapStateToProps = (state)=>{
    return{
        todo: state.authReducer.AuthUser,
    }
}

export default connect (mapStateToProps) (ProtectedRoute)