
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as newsAPI from '../../utilities/news-api';

export default function SportsPage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [sports, setSports] = useState([]);

    useEffect(function () {
        async function getNewsSports() {
            const sports = await newsAPI.getSports();
            setBusy(false);
            setSports(sports);
        }
        getNewsSports();
    }, []);

    return (
        <>
            <h2>Tech News</h2>
            <div className='news-main-div'>
                <Card isBusy={isBusy} data={sports} />
            </div>
        </>
    );
}



