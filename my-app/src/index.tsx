import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { NewTopic } from './NewTopic';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/newTopic" element={<NewTopic />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
