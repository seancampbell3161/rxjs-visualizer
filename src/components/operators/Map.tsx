import { useState } from "react"
import OperatorLabel from "../OperatorLabel"
import Stream from "../Stream"

export default function Map() {
    const [marbleInput, setMarbleInput] = useState(0);
    const [marbleOutput, setMarbleOutput] = useState(0);

    const handleAdd = () => {
        const v = marbleInput + 1;
        setMarbleInput(v);
        setMarbleOutput(v * 2);
    }

    return (
        <>
            <div className="marble-container">
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={marbleInput.toString()} onButtonClick={handleAdd} />
            </div>
            <OperatorLabel expression={'map(x => x * 2)'} />
            <div className="marble-container">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={marbleOutput.toString()} onButtonClick={handleAdd} />
            </div>
        </>
    )
}