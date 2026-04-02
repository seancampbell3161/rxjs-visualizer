import { useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

export default function CatchError() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState('');
    const [outputId, setOutputId] = useState('');
    const [inputErrored, setInputErrored] = useState(false);
    const [outputCompleted, setOutputCompleted] = useState(false);
    const outputCountRef = useRef(0);

    const handleAdd = () => {
        if (inputErrored) return;
        const v = marbleInput + 1;
        setMarbleInput(v);
        outputCountRef.current++;
        setMarbleOutput(v.toString());
        setOutputId(outputCountRef.current.toString());
    };

    const handleError = () => {
        if (inputErrored) return;
        setInputErrored(true);
        outputCountRef.current++;
        setMarbleOutput('0');
        setOutputId(outputCountRef.current.toString());
        setTimeout(() => setOutputCompleted(true), 100);
    };

    return (
        <>
            <OperatorDescription
                name="catchError"
                tagline="Catch errors and replace them with a fallback."
                description="When the source stream errors, catchError intercepts the error and switches to a fallback observable instead of propagating the error. Click + to emit values, then click the error button to trigger an error — the output receives a fallback value of 0 instead of crashing."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd} disabled={inputErrored}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <button className="error-button" onClick={handleError} disabled={inputErrored}>
                    <span className="material-symbols-outlined">close</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} error={inputErrored} />
            </div>
            <OperatorLabel expression={'catchError(() => of(0))'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput} marbleId={outputId} completed={outputCompleted} />
            </div>
        </>
    );
}
