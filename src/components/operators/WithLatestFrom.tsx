import { useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

const alpha = 'abcdefghijklmnopqrstuvwxyz';

export default function WithLatestFrom() {
    const [marble1Input, setMarble1Input] = useState(0);
    const [marble2Input, setMarble2Input] = useState('');
    const [marble2Index, setMarble2Index] = useState(-1);
    const [marbleOutput, setMarbleOutput] = useState('');
    const [outputId, setOutputId] = useState('');
    const latest2Ref = useRef('');
    const outputCountRef = useRef(0);

    const handleAdd1 = () => {
        const v = marble1Input + 1;
        setMarble1Input(v);
        if (latest2Ref.current) {
            outputCountRef.current++;
            setMarbleOutput(v + latest2Ref.current);
            setOutputId(outputCountRef.current.toString());
        }
    };

    const handleAdd2 = () => {
        const r = marble2Index + 1;
        setMarble2Index(r);
        const letter = alpha[r % 26];
        setMarble2Input(letter);
        latest2Ref.current = letter;
    };

    return (
        <>
            <OperatorDescription
                name="withLatestFrom"
                tagline="Combine with the latest value from another stream — but only when the primary emits."
                description="When the primary source emits, it grabs the most recent value from the secondary stream and combines them. Emissions from the secondary stream alone do not trigger output. Compare with combineLatest, which emits whenever either stream changes."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd1}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marble1Input.toString()} />
            </div>
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd2}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(70, 105, 255)" marbleValue={marble2Input} />
            </div>
            <OperatorLabel expression={'withLatestFrom((x, y) => "" + x + y)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput} marbleId={outputId} />
            </div>
        </>
    );
}
