import { render } from 'inferno';
import App from './components/App';
import './main.css';

const container = document.getElementById('app');

render(<App />, container);
