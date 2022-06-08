
import '../AuthPage/AuthPage.css';
import { useState, useEffect } from 'react';
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
            <h2> <h1>🗺</h1> Science News </h2>
           
            {isBusy ? (<p></p>) : (
                science.map(function (d, id) {
                    return <li>{d.title}</li>;
                })
            )}
        </>
    );
}



