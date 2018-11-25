import React, {useState, useEffect} from 'react';
import './App.css';
import {decisionMaker} from "./decisionMaker";

export default function FutureForm() {
    const [firstName, setFirstName] = useState('Leroy');
    const [lastName, setLastName] = useState('Jenkins');
    const [status, setStatus] = useState('');
    const [applied, setApplied] = useState(false);

    useEffect(() => {
        document.title = firstName + "'s Application";
    });

    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
    }

    function apply() {
        setStatus(decisionMaker());
        setApplied(true)
    }

    function reset() {
        setFirstName('');
        setLastName('');
        setStatus('');
        setApplied(false)
    }


    if (applied) {
        return (
            <section>
                <h1>Da Future Application Status:</h1>
                <h2>{status}</h2>

                <button onClick={reset}>
                    Reset
                </button>
            </section>
        )
    }
    return (
        <section>
            <h1>Excella Application</h1>
            <div>
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </div>
            <div>
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </div>
            <button onClick={apply}>
                Apply
            </button>
        </section>
    );

}