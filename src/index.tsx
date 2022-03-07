import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/Form/Form';

ReactDOM.render(
  <StrictMode>
    <main>
      <h1>Robusta Technical Frontend Task</h1>
      <Form />
    </main>
  </StrictMode>,
  document.getElementById('root')
);
