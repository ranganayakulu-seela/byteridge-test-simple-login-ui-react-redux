import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';  
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../_actions';

function AuditDetails() {
    const user = useSelector(state => state.authentication.user);
    const auditDetails = useSelector(state => state.users.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getLoginAuditDetails());
    }, []);
     
    const columns = [
        {  
            dataField: 'firstName',  
            text: 'FirstName'  
        },
        {  
            dataField: 'lastName',  
            text: 'LastName'  
        },
        {  
            dataField: 'username',  
            text: 'UserName'  
        },
        {  
            dataField: 'role',  
            text: 'Role'  
        },
        {  
            dataField: 'clientIPAddress',  
            text: 'IP Address'  
        },
        {  
            dataField: 'loginTime',  
            text: 'LoggedIn Time'  
        },
        {  
            dataField: 'logoutTime',  
            text: 'LoggedOut Time'  
        }
    ];

    const handleLogout=()=>{
        dispatch(userActions.userLogOut(user.id));
    }

    return (
       
        <div>
            <h2>Audit Details</h2>
            <p className="text-right">
                <Link to="/">Dashboard</Link>
                <Link to="/login"  className="pl-3" onClick={handleLogout}>Logout</Link>
            </p>
            <BootstrapTable   
                striped  
                hover  
                keyField='id'   
                data={(auditDetails)?auditDetails:[]}   
                columns={columns}  
                pagination={ paginationFactory() } 
            />  
        </div>
    );
}

export { AuditDetails };