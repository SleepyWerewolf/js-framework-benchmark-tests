import { Fragment, Component } from 'inferno';
import './App.css';
import { TestButton } from './Test';

class App extends Component {
    state = {
        numRowsToGenerate: 1000,
    };

    render() {
        return (
            <Fragment>
                <input type='text' name='numRowsToGenerate' onChange={(event) => this.setState({
                    numRowsToGenerate: parseInt(event.target.value),
                })} />
                <TestButton numRowsToGenerate={this.state.numRowsToGenerate} />
            </Fragment>
        );
    }
}

export default App;
