import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx'; // Asegúrate de que esta ruta sea correcta

const root = createRoot(document.getElementById('app'));
root.render(<App />);
