import { Component, Fragment } from 'inferno';

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

interface ITestButtonState {
    rows: JSX.Element[];
}

export class TestButton extends Component<ITestButtonProps, ITestButtonState> {
    state = {
        rows: [],
    }

    componentDidUpdate() {
        const global: any = window;

        if (global.test) {
            const startTime = global.test;
            console.log(`Time to render ${this.props.numRowsToGenerate} items: ${performance.now() - startTime}`);
            delete global.test;
        }
    }

    render() {
        return (
            <Fragment>
                <button onClick={() => {
                    (window as any).test = performance.now();
                    const newRows = generateRows(this.props.numRowsToGenerate);
                    this.setState({
                        rows: [
                            ...this.state.rows,
                            ...newRows,
                        ]
                    })
                }}>
                    Generate {this.props.numRowsToGenerate} Rows
            </button>
                <button onClick={() => this.setState({ rows: [] })}>
                    Clear Rows
            </button>
                {this.state.rows}
            </Fragment>
        );
    }
}
