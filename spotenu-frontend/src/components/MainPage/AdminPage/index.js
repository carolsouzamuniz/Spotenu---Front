import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useProtectedPage } from '../../../hooks/useProtectedPage';
import { PageTitle } from '../../PageTitle';

export const AdminPage = () => {
    const [bands, setBands] = useState([]);
    
    useProtectedPage();

    const getBandsList = () => {
        axios
        .get('http://localhost:3003/view-bands',
        {
            headers: {
                authenticator: window.localStorage.getItem('token')
            }
        })
        .then((response) => {
            setBands(response.data)
        })
    }

    useEffect(() => {
        getBandsList()
    }, [])

    return <div>
        <PageTitle title={'Página do administrador'}/>
        {bands ? getBandsList() : <div>Carregando...</div>} 
       
    </div>
}
