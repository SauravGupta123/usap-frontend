import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./Context";
import Reducer, { initialState } from "./utils/Reducer";
// const root = ReactDOM.createRoot(document.getElementById("root"));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider reducer={Reducer} initialstate={initialState}>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </StrictMode>
);
