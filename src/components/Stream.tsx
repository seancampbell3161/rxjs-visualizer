import { ReactElement, useEffect, useState } from "react";
import Marble from './Marble'

interface MarbleProps {
    label: string;
}

export default function Stream() {
    const [marbleProps, setMarbleProps] = useState<MarbleProps[]>([])

    const handleAdd = () => {
        setMarbleProps(props => [...props, { label: (marbleProps.length + 1).toString() }]);
    }
    
    const marbles: ReactElement[] = marbleProps.map((props, index) => {
        return <Marble key={index} label={props.label} />
    });
    
    return (
        <>
            <button id="myButton" onClick={handleAdd}>Add</button>
            <svg className="stream-container" viewBox='0 0 7 10' style={{ width: '48px' }}>
                <line x1={1} x2={112} y1={5} y2={5} stroke='white' strokeWidth={0.3}></line>
                <polygon points='111.7,6.1 111.7,3.9 114,5' stroke='white'></polygon>
            </svg>
            <svg className="stream-container" viewBox='0 0 100 10' style={{ width: '680px' }}>
                {marbles}
            </svg>
        </>
    )
}