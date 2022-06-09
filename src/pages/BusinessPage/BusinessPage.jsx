
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as newsAPI from '../../utilities/news-api';

export default function SciencePage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [business, setBusiness] = useState([]);

    useEffect(function () {
        async function getNewsBusiness() {
            const business = await newsAPI.getBusiness();
            setBusy(false);
            setBusiness(business);
        }
        getNewsBusiness();
    }, []);

    return (
        <>
            <h2>Business News</h2>
            <div className='news-main-div'>
                <Card isBusy={isBusy} data={business} />
            </div>
        </>
    );
}



