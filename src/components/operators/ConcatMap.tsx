import { useEffect, useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

const alpha = 'abcdefghijklmnopqrstuvwxyz';

export default function ConcatMap() {
    const [source, setSource] = useState(0);
    const [innerEmission, setInnerEmission] = useState('');
    const [output, setOutput] = useState('');
    const [outputId, setOutputId] = useState('');

    const queueRef = useRef<number[]>([]);
    const isProcessingRef = useRef(false);
    const intervalRef = useRef<number | undefined>(undefined);
    const outputCountRef = useRef(0);

    // Clean up interval on unmount
    useEffect(() => () => clearInterval(intervalRef.current), []);

    const processNext = () => {
        if (queueRef.current.length === 0) {
            isProcessingRef.current = false;
            return;
        }
        const value = queueRef.current.shift()!;
        isProcessingRef.current = true;
        let count = 0;

        intervalRef.current = setInterval(() => {
            if (count < 3) {
                setInnerEmission(alpha[count]);
                outputCountRef.current++;
                setOutput(value.toString() + alpha[count]);
                setOutputId(outputCountRef.current.toString());
                count++;
            } else {
                clearInterval(intervalRef.current);
                processNext();
            }
        }, 800);
    };

    const handleAdd = () => {
        const v = source + 1;
        setSource(v);
        queueRef.current.push(v);
        if (!isProcessingRef.current) {
            processNext();
        }
    };

    return (
        <>
            <OperatorDescription
                name="concatMap"
                tagline="Map to inner observables and run them one at a time."
                description="Like mergeMap, but inner observables are queued and executed sequentially — the next one starts only after the previous completes. Click multiple times quickly to see values queue up and process in order."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={source.toString()} />
            </div>
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(70, 105, 255)" marbleValue={innerEmission} />
            </div>
            <OperatorLabel expression={'obs1$.concatMap(x => obs2$((x, y) => x + y))'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={output} marbleId={outputId} />
            </div>
        </>
    );
}
