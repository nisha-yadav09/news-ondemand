
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as newsAPI from '../../utilities/news-api';

export default function GeneralPage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [general, setGeneral] = useState([]);

    useEffect(function () {
        async function getNewsGeneral() {
            const general = await newsAPI.getGeneral();
            setBusy(false);
            setGeneral(general);
        }
        getNewsGeneral();
    }, []);

    return (
        <>
            <h2>General News</h2>
            <div className='news-main-div'>
                <Card isBusy={isBusy} data={general} />
            </div>
        </>
    );
}



