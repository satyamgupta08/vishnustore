import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './contex/Appcontext';
import {store} from "./redux/store";
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
const root = ReactDOM.createRoot(document.getElementById('root'));
//const [searchParams] = useSearchParams();
 // const searchTerm = searchParams.get('q');
root.render(
  <BrowserRouter>
 
<Provider store={store}>

  <AppContextProvider >
 
    <App />
  <Toaster/>

</AppContextProvider>


</Provider>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
