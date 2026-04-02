export interface OperatorInfo {
    path: string;
    label: string;
}

export interface OperatorCategory {
    name: string;
    operators: OperatorInfo[];
}

export const OPERATOR_CATEGORIES: OperatorCategory[] = [
    {
        name: 'Transformation',
        operators: [
            { path: 'map', label: 'map' },
            { path: 'scan', label: 'scan' },
            { path: 'startWith', label: 'startWith' },
        ],
    },
    {
        name: 'Filtering',
        operators: [
            { path: 'filter', label: 'filter' },
            { path: 'take', label: 'take' },
            { path: 'debounceTime', label: 'debounceTime' },
            { path: 'distinctUntilChanged', label: 'distinctUntilChanged' },
        ],
    },
    {
        name: 'Combination',
        operators: [
            { path: 'merge', label: 'merge' },
            { path: 'zip', label: 'zip' },
            { path: 'combineLatest', label: 'combineLatest' },
            { path: 'concat', label: 'concat' },
        ],
    },
    {
        name: 'Higher-order',
        operators: [
            { path: 'mergeMap', label: 'mergeMap' },
            { path: 'switchMap', label: 'switchMap' },
            { path: 'concatMap', label: 'concatMap' },
            { path: 'exhaustMap', label: 'exhaustMap' },
        ],
    },
    {
        name: 'Utility',
        operators: [
            { path: 'tap', label: 'tap' },
            { path: 'delay', label: 'delay' },
        ],
    },
    {
        name: 'Error Handling',
        operators: [
            { path: 'catchError', label: 'catchError' },
        ],
    },
];
