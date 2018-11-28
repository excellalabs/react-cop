import React, {useState, useEffect, useContext } from 'react';
import './App.css';
import { decisionMaker } from './decisionMaker';
import { LocaleContext } from './context';

export default function FormE() {
    // const [firstName, setFirstName] = useFormInput('Glittering');
    // const [lastName, setLastName] = useFormInput('Gold');
    const firstName = useFormInput('Glittering');
    const lastName = useFormInput('Gold');
    const [status, setStatus] = useState('');
    const [applied, setApplied] = useState(false);
    const locale = useContext(LocaleContext);
    const width = useWindowWidth();
    useDocumentTitle(firstName.value + ' ' + lastName.value);

    function apply() {
        setStatus(decisionMaker());
        setApplied(true)
    }

    function reset() {
        // setFirstName('');
        // setLastName('');
        setStatus('');
        setApplied(false)
    }

    if (applied) {
        return (
            <section>
                <h1>Hooks Application Status:</h1>
                <h2>{firstName.value} {lastName.value} was {status}</h2>

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
                    {...firstName}
                />
            </div>
            <div>
                <input
                    {...lastName}
                />
            </div>
            <button onClick={apply}>
                Apply
            </button>
        </section>
    );
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
 
    function handleInputChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleInputChange
    };
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return width;
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title + "'s Application";
    });
}
