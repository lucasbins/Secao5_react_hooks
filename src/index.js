import './index.css'
/*com o react 18 utilizar o react-dom/client ao
inves do reactDOM para remover o aviso*/
import * as ReactDOMClient from 'react-dom/client';
import React from 'react'

import App from './views/App'

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);


root.render(<App />);
