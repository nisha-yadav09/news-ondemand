
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as newsAPI from '../../utilities/news-api';

export default function SportsPage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [health, setHealth] = useState([]);

    useEffect(function () {
        async function getNewsSports() {
            const health = await newsAPI.getHealth();
            setBusy(false);
            setHealth(health);
        }
        getNewsSports();
    }, []);

    return (
        <>
            <h2>Health News</h2>
            <div className='news-main-div'>
                <Card isBusy={isBusy} data={health} />
            </div>
        </>
    );
}



