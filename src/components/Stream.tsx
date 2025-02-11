import { MouseEventHandler, ReactElement, useEffect, useState } from "react";
import Marble from './Marble'

export interface MarbleProps {
    label: string;
    marbleColor: string;
}

export interface StreamProps {
    marbleColor: string;
    marbleValue: string;
    onButtonClick: MouseEventHandler;
}

export default function Stream({ marbleColor, marbleValue, onButtonClick }: StreamProps) {
    const [marbleProps, setMarbleProps] = useState<MarbleProps[]>([])

    useEffect(() => {
        if (Number(marbleValue) > 0) {
            setMarbleProps(props => [...props, { label: marbleValue, marbleColor: marbleColor }]);
        }
    }, [marbleValue]);

    // const handleAdd = () => {
    //     setMarbleProps(props => [...props, { label: marbleValue, marbleColor: marbleColor }]);
    // }
    
    const marbles: ReactElement[] = marbleProps.map((props, index) => {
        return <Marble key={index} label={props.label} marbleColor={marbleColor} />
    });
    
    return (
        <>
            {/* <button id="myButton" className="add-button" onClick={handleAdd}><span className="material-symbols-outlined">add</span></button> */}
            <button id="myButton" className="add-button" onClick={onButtonClick}><span className="material-symbols-outlined">add</span></button>
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