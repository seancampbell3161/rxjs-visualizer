export default function Home() {
    return (
        <div className="home">
            <h2 className="home-heading">Interactive RxJS Marble Diagrams</h2>
            <p className="home-intro">
                RxJS is a library for composing asynchronous programs using <em>observable sequences</em>.
                Instead of thinking about single values or callbacks, you work with <strong>streams</strong> —
                sequences of values that arrive over time.
            </p>
            <p className="home-intro">
                Marble diagrams are the standard way to visualise how operators transform these streams.
                Each circle (marble) represents a value emitted at a point in time, travelling left to right along a timeline.
            </p>
            <p className="home-intro">
                Pick an operator from the sidebar to see it in action. Click the <strong>+</strong> button to emit
                values and watch how the operator reacts in real time.
            </p>

            <div className="home-legend">
                <div className="home-legend-item">
                    <svg viewBox="0 0 20 20" width="28" height="28">
                        <defs>
                            <radialGradient id="lg1" cx="38%" cy="35%" r="60%">
                                <stop offset="0%" stopColor="#ff9a80"/>
                                <stop offset="100%" stopColor="#e03000"/>
                            </radialGradient>
                        </defs>
                        <circle cx="10" cy="10" r="8" fill="url(#lg1)" stroke="white" strokeWidth="0.8" strokeOpacity="0.4"/>
                    </svg>
                    <span>Input stream</span>
                </div>
                <div className="home-legend-item">
                    <svg viewBox="0 0 20 20" width="28" height="28">
                        <defs>
                            <radialGradient id="lg2" cx="38%" cy="35%" r="60%">
                                <stop offset="0%" stopColor="#80ffaa"/>
                                <stop offset="100%" stopColor="#00a040"/>
                            </radialGradient>
                        </defs>
                        <circle cx="10" cy="10" r="8" fill="url(#lg2)" stroke="white" strokeWidth="0.8" strokeOpacity="0.4"/>
                    </svg>
                    <span>Output stream</span>
                </div>
                <div className="home-legend-item">
                    <svg viewBox="0 0 20 20" width="28" height="28">
                        <defs>
                            <radialGradient id="lg3" cx="38%" cy="35%" r="60%">
                                <stop offset="0%" stopColor="#80aaff"/>
                                <stop offset="100%" stopColor="#0030e0"/>
                            </radialGradient>
                        </defs>
                        <circle cx="10" cy="10" r="8" fill="url(#lg3)" stroke="white" strokeWidth="0.8" strokeOpacity="0.4"/>
                    </svg>
                    <span>Second input stream</span>
                </div>
                <div className="home-legend-item">
                    <svg viewBox="0 0 20 20" width="28" height="28">
                        <line x1="10" y1="2" x2="10" y2="18" stroke="white" strokeWidth="2.5"/>
                    </svg>
                    <span>Stream completed</span>
                </div>
                <div className="home-legend-item">
                    <svg viewBox="0 0 20 20" width="28" height="28">
                        <line x1="4" y1="4" x2="16" y2="16" stroke="#ff4444" strokeWidth="2.5"/>
                        <line x1="16" y1="4" x2="4" y2="16" stroke="#ff4444" strokeWidth="2.5"/>
                    </svg>
                    <span>Stream errored</span>
                </div>
            </div>
        </div>
    );
}
