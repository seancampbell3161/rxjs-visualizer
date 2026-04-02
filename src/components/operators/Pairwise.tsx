import { useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

export default function Pairwise() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState('');
    const [outputId, setOutputId] = useState('');
    const prevRef = useRef<number | null>(null);
    const outputCountRef = useRef(0);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);
        if (prevRef.current !== null) {
            outputCountRef.current++;
            setMarbleOutput(`[${prevRef.current},${v}]`);
            setOutputId(outputCountRef.current.toString());
        }
        prevRef.current = v;
    };

    return (
        <>
            <OperatorDescription
                name="pairwise"
                tagline="Emit the previous and current value as a pair."
                description="Groups consecutive emissions into pairs of two. The first emission is buffered — output only starts from the second value onward. Each output is an array of [previous, current]."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'pairwise()'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput} marbleId={outputId} />
            </div>
        </>
    );
}
