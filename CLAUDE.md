# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # TypeScript compile + Vite bundle
npm run lint     # ESLint
npm run preview  # Preview production build
```

No test runner is configured.

## Architecture

**RxJS Visualizer** — an interactive web app that demonstrates RxJS operators via animated marble diagrams. Users click "add" buttons to emit marbles and see how operators transform streams in real time.

**Stack:** React 18 + TypeScript, Vite, RxJS 7, React Router v7

**Routing:** `App.tsx` defines all routes and nav links. Each operator is a route (`/map`, `/filter`, `/combineLatest`, etc.).

## Adding a New Operator

1. Create `src/components/operators/[OperatorName].tsx` following the pattern below
2. Add import + `<Route>` + `<Link>` in `App.tsx`

### Operator Component Pattern

```tsx
import { useState, useEffect } from "react"
import Stream from "../Stream"
import OperatorLabel from "../OperatorLabel"

export default function MyOperator() {
    // State drives marble emissions
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);

    useEffect(() => {
        // React to input changes, compute output
    }, [input]);

    return (
        <>
            <div className="marble-container">
                <button className="add-button" onClick={() => setInput(input + 1)}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <Stream marbleColor="rgb(255, 105, 70)" marbleValue={input.toString()} />
            </div>
            <OperatorLabel expression={'myOperator()'} />
            <div className="marble-container extra-margin">
                <Stream marbleColor="rgb(105, 255, 70)" marbleValue={output.toString()} />
            </div>
        </>
    )
}
```

### Stream Color Convention

| Stream        | Color                  |
|---------------|------------------------|
| Input 1       | `rgb(255, 105, 70)` (coral) |
| Input 2       | `rgb(70, 105, 255)` (blue)  |
| Input 3       | `rgb(105, 70, 255)` (purple)|
| Output        | `rgb(105, 255, 70)` (green) |

### Key Components

- **`Stream`** — renders an SVG timeline with marbles. Props: `marbleColor: string`, `marbleValue: string`
- **`OperatorLabel`** — displays the operator expression/code. Props: `expression: string`
- **`Marble`** — animates a single marble along the timeline (used internally by Stream)

### Async Operator Pattern

For operators with timing (e.g., switchMap, concatMap), use `setInterval` inside `useEffect` to simulate inner observable emissions:

```tsx
useEffect(() => {
    if (input > 0) {
        let count = 0;
        const id = setInterval(() => {
            if (count < 3) { setOutput(...); count++; }
            else clearInterval(id);
        }, 800);
        return () => clearInterval(id);
    }
}, [input]);
```
