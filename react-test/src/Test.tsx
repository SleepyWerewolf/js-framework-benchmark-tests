import React, { useState, Fragment, useEffect } from 'react';

const generateRows = (numRows: number) => {
    const rows: JSX.Element[] = [];

    for (let i = 0; i < numRows; i++) {
        rows.push(<div key={i}>I am a div!</div>);
    }

    return rows;
};

interface ITestButtonProps {
    numRowsToGenerate: number;
}

export const TestButton = ({ numRowsToGenerate }: ITestButtonProps) => {
    const [ rows, setRows ] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const global: any = window;

        if (global.test) {
            const startTime = global.test;
            console.log(`Time to render ${numRowsToGenerate}: ${performance.now() - startTime}`);
            delete global.test;
        }
    });

    return (
        <Fragment>
            <button onClick={() => {
                (window as any).test = performance.now();
                const newRows = generateRows(numRowsToGenerate);
                setRows([
                    ...rows,
                    ...newRows,
                ]);
            }}>
                Generate {numRowsToGenerate} Rows
            </button>
            <button onClick={() => setRows([])}>
                Clear Rows
            </button>
            {rows}
        </Fragment>
    )
};
