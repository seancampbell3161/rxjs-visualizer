import { useEffect, useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

const alpha = 'abcdefghijklmnopqrstuvwxyz';

export default function ExhaustMap() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState('');
    const [outputId, setOutputId] = useState('');
    const activeRef = useRef(false);
    const outputCountRef = useRef(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

    useEffect(() => () => clearInterval(intervalRef.current), []);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);

        if (activeRef.current) return;
        activeRef.current = true;

        let count = 0;
        intervalRef.current = setInterval(() => {
            if (count < 3) {
                outputCountRef.current++;
                setMarbleOutput(v.toString() + alpha[count]);
                setOutputId(outputCountRef.current.toString());
                count++;
            } else {
                clearInterval(intervalRef.current);
                activeRef.current = false;
            }
        }, 800);
    };

    return (
        <>
            <OperatorDescription
                name="exhaustMap"
                tagline="Ignore new values while the current inner observable is active."
                description="Maps each source value to an inner observable, but if a previous inner is still running, the new source value is silently dropped. Click rapidly — only the first click starts an inner observable; the rest are ignored until it finishes. Compare with switchMap (cancel previous) and mergeMap (run all)."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'exhaustMap(x => obs$(x))'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput} marbleId={outputId} />
            </div>
        </>
    );
}
