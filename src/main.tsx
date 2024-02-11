import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './reset.css';
import GlobalStyle from './GlobalStyle.ts';
import Subjects from './pages/Subjects/Subjects.tsx';
import App from './App.tsx';
import Questions from './pages/Questions/Questions.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Subjects />,
  },
  {
    path: '/subject/:subject',
    element: <Questions />,
  },
  // {
  //   path: '/random',
  //   element: <div>to do</div>
  // }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
      <GlobalStyle />
    </App>
  </React.StrictMode>
);
