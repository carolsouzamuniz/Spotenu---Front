import React, { useState } from 'react';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { PageTitle } from '../PageTitle';

export const ListBandsPage = () => {
    const getList = () => {
        const [band, setBand] = useState([]);

        useEffect(() => {
            axios.get('http://localhost:3003/view-bands')
            .then((response) => {
                setBand(response.data)
            })
        })
    }

    const bands = getList();

    useProtectedPage();

    return <div>
        <PageTitle title={'Lista de bandas'}/>
        
    </div>
}