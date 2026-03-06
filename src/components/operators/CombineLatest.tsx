import { useEffect, useState } from "react";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";
import Stream from "../Stream";

export default function CombineLatest() {
    const [marble1Input, setMarble1Input] = useState(0);
    const [marble2Index, setMarble2Index] = useState(-1);
    const [marble2Input, setMarble2Input] = useState('');
    const [marbleOutput, setMarbleOutput] = useState('');

    useEffect(() => {
        if (marble1Input > 0 && marble2Index > -1) {
            setMarbleOutput(marble1Input + marble2Input);
        }
    }, [marble1Input, marble2Index]);

    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    const handleAdd1 = () => {
        const r = marble1Input + 1;
        setMarble1Input(r);
    }

    const handleAdd2 = () => {
        if (marble2Index >= 25) {
            const i = -1;
            setMarble2Index(i);
            return;
        }

        const r = marble2Index + 1;
        setMarble2Index(r);
        setMarble2Input(alpha[r]);
    }

    return (
        <>
            <OperatorDescription
                name="combineLatest"
                tagline="React to any stream, using the latest from all."
                description="Whenever any source emits, it combines the most recent value from each stream and emits the result. Both streams must have emitted at least once before any output appears."
            />
            <div className="marble-container">
            <button className="add-button" onClick={handleAdd1}><span className="material-symbols-outlined">add</span></button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marble1Input.toString()} />
            </div>
            <div className="marble-container">
            <button className="add-button" onClick={handleAdd2}><span className="material-symbols-outlined">add</span></button>
                <Stream marbleColor="rgb(70, 105, 255)" marbleValue={marble2Input} />
            </div>
            <OperatorLabel expression={'combineLatest((x, y) => "" + x + y)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    )
}