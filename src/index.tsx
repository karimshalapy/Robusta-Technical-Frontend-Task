import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/Form';
import PageTitle from './components/PageTitle/PageTitle';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <main>
      <PageTitle>Robusta Technical Frontend Task</PageTitle>
      <Form />
    </main>
  </StrictMode>,
  document.getElementById('root')
);
