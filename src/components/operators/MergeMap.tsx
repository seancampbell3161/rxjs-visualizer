import { useEffect, useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

const alpha = 'abcdefghijklmnopqrstuvwxyz';

export default function MergeMap() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState('');
    const [outputId, setOutputId] = useState('');
    const sourceRef = useRef(0);
    const outputCountRef = useRef(0);
    const intervalsRef = useRef<number[]>([]);

    useEffect(() => () => intervalsRef.current.forEach(clearInterval), []);

    const handleAdd = () => {
        sourceRef.current++;
        const v = sourceRef.current;
        setMarbleInput(v);

        let count = 0;
        // Each source marble starts its own inner observable — none are cancelled
        const id = setInterval(() => {
            if (count < 3) {
                const emission = v.toString() + alpha[count];
                outputCountRef.current++;
                setMarbleOutput(emission);
                setOutputId(outputCountRef.current.toString());
                count++;
            } else {
                clearInterval(id);
                intervalsRef.current = intervalsRef.current.filter(i => i !== id);
            }
        }, 800);

        intervalsRef.current.push(id);
    };

    return (
        <>
            <OperatorDescription
                name="mergeMap"
                tagline="Map to inner observables and run them all at once."
                description="Maps each source value to an inner observable and subscribes to all of them concurrently — nothing is queued or cancelled. Click multiple times quickly and watch emissions from all inner observables interleave in the output. Compare with concatMap (sequential) and switchMap (cancel previous)."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'mergeMap(x => obs$(x))'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput} marbleId={outputId} />
            </div>
        </>
    );
}
