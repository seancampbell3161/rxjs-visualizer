import { useEffect, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";

export default function ConcatMap() {
    const [marble1Queue, setMarble1Queue] = useState([0])
    const [marble1Input, setMarble1Input] = useState(0);
    const [marble2Input, setMarble2Input] = useState('');
    const [marbleOutput, setMarbleOutput] = useState('');
    const [marble2Working, setMarble2Working] = useState(false);
    const [count, setCount] = useState(0);

    const handleAdd1 = () => {
        setCount(count + 1);
        setMarble1Queue(arr => [...arr, count + 1]);
        setMarble1Input(count + 1);

        startMarble2(count);
        console.log(marble1Input);
    }

    const startMarble2 = (value: number) => {
        let intervalId: number | null;
        let count = 0;

        const emitMarble = () => {
            if (count < 3) {
                setMarble2Input((value + 1) + alpha[count]);
                count++;
            }
        }

        // intervalId = setInterval(emitMarble, 500);
        setInterval(emitMarble, 500);
    }

    // useEffect(() => {
    //     if (marble1Input > 0) {
    //         let intervalId: number | undefined;
    //         let count = 0;

    //         const emitMarble = () => {
    //             if (count < 3) {
    //                 setMarble2Input(marble1Input.toString() + alpha[count]);
    //                 count++;
    //             }
    //         }

    //         intervalId = setInterval(emitMarble, 800);
    //         return () => clearInterval(intervalId);
    //     }
    // }, [marble1Queue]);

    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    return (
        <>
            <div className="marble-container">
            <button className="add-button" onClick={handleAdd1}><span className="material-symbols-outlined">add</span></button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marble1Input.toString()} />
            </div>
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(70, 105, 255)" marbleValue={marble2Input} />
            </div>
            <OperatorLabel expression={'obs1$.concatMap(x => obs2$((x, y) => x + y))'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    )
}