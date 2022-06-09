
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import * as newsAPI from '../../utilities/news-api';

export default function SciencePage({ setUser }) {
    const [isBusy, setBusy] = useState(true)
    const [tech, setTech] = useState([]);

    useEffect(function () {
        async function getNewsTech() {
            const tech = await newsAPI.getTech();
            setBusy(false);
            setTech(tech);
        }
        getNewsTech();
    }, []);

    return (
        <>
            <h2>Tech News</h2>
            <div className='news-main-div'>
                <Card isBusy={isBusy} data={tech} />
            </div>
        </>
    );
}



