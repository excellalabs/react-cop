import React, {useState, useEffect, useContext } from 'react';
import './App.css';
import { decisionMaker } from './decisionMaker';
import { LocaleContext } from './context';

export default function FormD() {
    const [firstName, setFirstName] = useState('Newton');
    const [lastName, setLastName] = useState('Smells');
    const [status, setStatus] = useState('');
    const [applied, setApplied] = useState(false);
    const locale = useContext(LocaleContext);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        document.title = firstName + ' ' + lastName + "'s Application";
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
                <h1>Hooks Application Status:</h1>
                <h2>{firstName} {lastName} was {status}</h2>

                <button onClick={reset}>
                    Reset
                </button>
                <h2>{locale.locale}</h2>
                <h1>{width}</h1>
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
