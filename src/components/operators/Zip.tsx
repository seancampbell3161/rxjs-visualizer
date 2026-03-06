import { useRef, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";
import OperatorDescription from "../OperatorDescription";

const alpha = 'abcdefghijklmnopqrstuvwxyz';

export default function Zip() {
    const [marble1Input, setMarble1Input] = useState(0);
    const [marble2Input, setMarble2Input] = useState('');
    const [marbleOutput, setMarbleOutput] = useState('');

    // Queues hold unmatched emissions; zip pairs them positionally
    const queue1Ref = useRef<number[]>([]);
    const queue2Ref = useRef<string[]>([]);
    const count1Ref = useRef(0);
    const count2Ref = useRef(0);

    const tryEmit = () => {
        if (queue1Ref.current.length > 0 && queue2Ref.current.length > 0) {
            const v1 = queue1Ref.current.shift()!;
            const v2 = queue2Ref.current.shift()!;
            setMarbleOutput(v1.toString() + v2);
        }
    };

    const handleAdd1 = () => {
        count1Ref.current++;
        const v = count1Ref.current;
        setMarble1Input(v);
        queue1Ref.current.push(v);
        tryEmit();
    };

    const handleAdd2 = () => {
        const v = alpha[count2Ref.current % 26];
        count2Ref.current++;
        setMarble2Input(v);
        queue2Ref.current.push(v);
        tryEmit();
    };

    return (
        <>
            <OperatorDescription
                name="zip"
                tagline="Pair values by position across streams."
                description="Waits until every source has emitted its Nth value, then combines them into a single output. The 1st value from each stream forms pair 1, the 2nd values form pair 2, and so on. Try clicking one button several times — nothing emits until the other stream catches up."
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
            <OperatorLabel expression={'zip(obs1$, obs2$)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput} />
            </div>
        </>
    );
}
