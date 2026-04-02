import { useEffect, useState } from "react";

interface StreamMarkerProps {
    type: 'complete' | 'error';
}

export default function StreamMarker({ type }: StreamMarkerProps) {
    const [x, setX] = useState(0);

    useEffect(() => setX(1), []);

    useEffect(() => {
        if (x <= 90) {
            const t = setTimeout(() => setX(oldX => oldX + 0.4), 7);
            return () => clearTimeout(t);
        }
    }, [x]);

    if (type === 'complete') {
        return (
            <g transform={`translate(${x}, 5)`}>
                <line y1={-3.5} y2={3.5} stroke="white" strokeWidth="0.6" />
            </g>
        );
    }

    return (
        <g transform={`translate(${x}, 5)`}>
            <line x1={-2} y1={-2} x2={2} y2={2} stroke="#ff4444" strokeWidth="0.7" />
            <line x1={2} y1={-2} x2={-2} y2={2} stroke="#ff4444" strokeWidth="0.7" />
        </g>
    );
}
