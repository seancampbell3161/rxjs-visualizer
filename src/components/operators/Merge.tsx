import { useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

const alpha = 'abcdefghijklmnopqrstuvwxyz';

export default function Merge() {
    const [marble1Input, setMarble1Input] = useState(0);
    const [marble2Input, setMarble2Input] = useState('');
    const [marbleOutput, setMarbleOutput] = useState('');
    const [outputId, setOutputId] = useState('');
    const count2Ref = useRef(0);
    const outputCountRef = useRef(0);

    const handleAdd1 = () => {
        const v = marble1Input + 1;
        setMarble1Input(v);
        outputCountRef.current++;
        setMarbleOutput(v.toString());
        setOutputId(outputCountRef.current.toString());
    };

    const handleAdd2 = () => {
        const v = alpha[count2Ref.current % 26];
        count2Ref.current++;
        setMarble2Input(v);
        outputCountRef.current++;
        setMarbleOutput(v);
        setOutputId(outputCountRef.current.toString());
    };

    return (
        <>
            <OperatorDescription
                name="merge"
                tagline="Combine streams — first come, first served."
                description="Subscribes to multiple observables simultaneously and forwards values from all of them to a single output stream in the order they arrive. Neither stream blocks the other. Click either button and watch values appear in the output immediately."
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
            <OperatorLabel expression={'merge(obs1$, obs2$)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput} marbleId={outputId} />
            </div>
        </>
    );
}
