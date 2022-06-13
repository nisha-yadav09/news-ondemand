
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as newsAPI from '../../utilities/news-api';
import NavBar from '../../components/NavBar/NavBar';

export default function GeneralPage({ user, setUser }) {
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
            <div className='news-main-div'>
                <Card isBusy={isBusy} data={general} />
            </div>
        </>
    );
}



