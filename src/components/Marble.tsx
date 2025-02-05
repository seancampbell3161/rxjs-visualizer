import { useEffect, useState } from "react";

interface MarbleProps {
    label: string,
}
export default function Marble({ label }: MarbleProps) {
    const [x, setX] = useState(0);

    useEffect(() => setX(1), []);
    
    useEffect(() => {
        if (x <= 95) {
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
                <circle r="2.3" style={{
                    fill: 'rgb(255, 105, 70)',
                    stroke: 'white',
                    strokeWidth: '0.3'
                }}>
                </circle>
                <text textAnchor='middle' y={0.8} style={{
                    color: 'black',
                    fontSize: '2.5px'
                }}>{label}</text>
            </g>

        </>
    )
}
