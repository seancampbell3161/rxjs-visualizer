
interface OperatorLabelProps {
    expression: string;
}
export default function OperatorLabel({expression}: OperatorLabelProps) {

    return (
        <>
            <div className="operator-label-container">
                <div className="operator-label">
                    <p>{expression}</p>
                </div>
            </div>
        </>
    )
}