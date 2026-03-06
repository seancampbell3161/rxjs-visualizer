import { ReactElement, useEffect, useState } from "react";
import Marble from './Marble'

export interface MarbleProps {
    label: string;
    marbleColor: string;
}

export interface StreamProps {
    marbleColor: string;
    marbleValue: string;
    /** When provided, used as the trigger for adding marbles instead of marbleValue.
     *  Allows showing duplicate consecutive values (e.g. distinctUntilChanged input). */
    marbleId?: string;
}

export default function Stream({ marbleColor, marbleValue, marbleId }: StreamProps) {
    const [marbleProps, setMarbleProps] = useState<MarbleProps[]>([]);
    const trigger = marbleId !== undefined ? marbleId : marbleValue;

    useEffect(() => {
        if (marbleId !== undefined) {
            if (marbleId !== '') {
                setMarbleProps(props => [...props, { label: marbleValue, marbleColor }]);
            }
        } else {
            if (Number(marbleValue) > 0) {
                setMarbleProps(props => [...props, { label: marbleValue, marbleColor }]);
            } else if (Number(marbleValue) !== 0) {
                setMarbleProps(props => [...props, { label: marbleValue, marbleColor }]);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger]);
    
    const marbles: ReactElement[] = marbleProps.map((props, index) => {
        return <Marble key={index} label={props.label} marbleColor={marbleColor} />
    });
    
    return (
        <>
            <svg className="stream-container" viewBox='0 0 7 10' style={{ width: '48px' }}>
                <line x1={1} x2={77.7} y1={5} y2={5} stroke='white' strokeWidth={0.3}></line>
                <polygon points='77.7,6.1 77.7,3.9 80,5' stroke='white'></polygon>
            </svg>
            <svg className="stream-container" viewBox='0 0 100 10' style={{ width: '500px' }}>
                {marbles}
            </svg>
        </>
    )
}