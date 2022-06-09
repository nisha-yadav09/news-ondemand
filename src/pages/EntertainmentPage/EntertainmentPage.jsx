
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as newsAPI from '../../utilities/news-api';

export default function EntertainmentPage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [entertainment, setEntertainment] = useState([]);

    useEffect(function () {
        async function getNewsEntertainment() {
            const entertainment = await newsAPI.getEntertainment();
            setBusy(false);
            setEntertainment(entertainment);
        }
        getNewsEntertainment();
    }, []);

    return (
        <>
            <h2>Entertainment News</h2>
            <div className='news-main-div'>
                <Card isBusy={isBusy} data={entertainment} />
            </div>
        </>
    );
}



