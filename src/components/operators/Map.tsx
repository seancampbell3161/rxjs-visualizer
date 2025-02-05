import Stream from "../Stream"

export default function Map() {
    return (
        <>
            <div className="marble-container">
                <Stream marbleColor="rgb(255, 105, 70)" />
            </div>
            <div className="marble-container">
                <Stream marbleColor="rgb(105, 255, 70)" />
            </div>
        </>
    )
}