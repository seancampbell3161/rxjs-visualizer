import { useEffect, useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

export default function StartWith() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState('0');
    const [outputId, setOutputId] = useState('');
    const outputCountRef = useRef(0);

    useEffect(() => {
        setOutputId('init');
    }, []);

    const handleAdd = () => {
        const v = marbleInput + 1;
        outputCountRef.current++;
        setMarbleInput(v);
        setMarbleOutput(v.toString());
        setOutputId(outputCountRef.current.toString());
    };

    return (
        <>
            <OperatorDescription
                name="startWith"
                tagline="Prepend an initial value before the source begins."
                description="Emits a specified value synchronously before subscribing to the source observable. Useful for providing a default or loading state. Notice the output stream already has a marble before you click anything."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} />
            </div>
            <OperatorLabel expression={'startWith(0)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput} marbleId={outputId} />
            </div>
        </>
    );
}
