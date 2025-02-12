import { useEffect, useState } from "react";
import Stream from "../Stream";
import OperatorLabel from "../OperatorLabel";

export default function Concat() {

    const [marble1Input, setMarble1Input] = useState('');
    const [marble2Input, setMarble2Input] = useState('');
    const [marble3Input, setMarble3Input] = useState('');
    const [marbleOutput, setMarbleOutput] = useState('');
    const [index, setIndex] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    useEffect(() => {
        if (marble1Input) {
            setTimeout(() => {
                setMarble2Input(alpha[index]);
                setMarbleOutput(alpha[index]);
                setIndex(i => i + 1);
            }, 2100);
        }
    }, [marble1Input]);

    useEffect(() => {
        if (marble2Input) {
            setTimeout(() => {
                setMarble3Input(alpha[index]);
                setMarbleOutput(alpha[index]);
                setIndex(i => i + 1);
            }, 2100);
        }
    }, [marble2Input]);

    useEffect(() => {
        if (marble3Input) {
            setTimeout(() => setIsDisabled(false), 2100);
        }
    }, [marble3Input])

    const handleAdd1 = () => {
        setMarble1Input(alpha[index]);
        setMarbleOutput(alpha[index]);
        setIndex(i => i + 1);
        setIsDisabled(true);
    }

    return (
        <>
            <div className="marble-container">
                <button className="add-button" onClick={handleAdd1} disabled={isDisabled}><span className="material-symbols-outlined">add</span></button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marble1Input.toString()} />
            </div>
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(70, 105, 255)" marbleValue={marble2Input} />
            </div>
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 70, 255)" marbleValue={marble3Input} />
            </div>
            <OperatorLabel expression={'concat(obs1$, obs2$, obs3$)'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} />
            </div>
        </>
    )
}