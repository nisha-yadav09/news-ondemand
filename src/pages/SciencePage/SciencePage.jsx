
import '../SciencePage/SciencePage.css';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as newsAPI from '../../utilities/news-api';

export default function SciencePage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [science, setScience] = useState([]);

    useEffect(function () {
        async function getNewsScience() {
            const science = await newsAPI.getScience();
            setBusy(false);
            setScience(science);
        }
        getNewsScience();
    }, []);

    return (
        <>
            <div className='news-main-div'>
                <Card isBusy={isBusy} data={science} />
            </div>
        </>
    );
}



