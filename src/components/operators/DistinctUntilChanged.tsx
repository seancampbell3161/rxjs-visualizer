import { useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

const VALUES = [1, 1, 2, 3, 3, 3, 4, 4, 5, 1, 1, 2];

export default function DistinctUntilChanged() {
    const [index, setIndex] = useState(0);
    const [emitCount, setEmitCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);
    const [lastOutput, setLastOutput] = useState(-1);

    const handleAdd = () => {
        const v = VALUES[index % VALUES.length];
        const newCount = emitCount + 1;

        setIndex(i => (i + 1) % VALUES.length);
        setEmitCount(newCount);
        setInputValue(v);

        if (v !== lastOutput) {
            setMarbleOutput(v);
            setLastOutput(v);
        }
    };

    return (
        <>
            <OperatorDescription
                name="distinctUntilChanged"
                tagline="Skip consecutive duplicate values."
                description="Compares each new value to the previous one and only emits if they differ. Useful for avoiding redundant work when a value is set to something it already was. The input stream uses the preset sequence [1, 1, 2, 3, 3, 3, 4, 4, 5…] — watch the output skip the repeats."
            />
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                {/* marbleId ensures a marble appears for every click, even if value is the same */}
                <Stream
                    marbleColor="rgb(255, 105, 70)"
                    marbleValue={inputValue.toString()}
                    marbleId={emitCount.toString()}
                />
            </div>
            <OperatorLabel expression={'distinctUntilChanged()'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    );
}
