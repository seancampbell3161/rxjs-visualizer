import { useEffect, useState } from "react";

interface MarbleProps {
    label: string,
    marbleColor: string;
}
export default function Marble({ label, marbleColor }: MarbleProps) {
    const [x, setX] = useState(0);

    useEffect(() => setX(1), []);
    
    useEffect(() => {
        if (x <= 90) {
            const t = setTimeout(() => setX(oldX => oldX + 0.4), 7)
            return () => clearTimeout(t);
        }
    }, [x]);

    return (
        <>
            <g style={{
                cursor: 'ew-resize'
            }}
                transform={`translate(${x}, 5)`}
            >
                <circle r="3.2" style={{
                    fill: {marbleColor}.marbleColor,
                    stroke: 'white',
                    strokeWidth: '0.3'
                }}>
                </circle>
                <text textAnchor='middle' y={1.1} style={{
                    color: 'black',
                    fontSize: '3px'
                }}>{label}</text>
            </g>

        </>
    )
}
