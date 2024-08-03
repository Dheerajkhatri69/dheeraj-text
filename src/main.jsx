import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider ,createBrowserRouter } from 'react-router-dom';

import Header from './component/header.jsx';
import Textarea from './component/textarea.jsx';
import About from './component/about.jsx';
import Chooice from './component/chooice.jsx';
import Voicetext from './component/voicetext.jsx';
import Notess from './component/notess.jsx';

const router = createBrowserRouter([
  {
    path: "/dheeraj-text/",
    element: <App />,
    children: [
      {
        path: "/dheeraj-text/",
        element: <><Header /><Textarea/><Chooice/></>,
      },
      {
        path: "/dheeraj-text/speech",
        element: <><Header /><Voicetext/><Chooice/></>,
      },
      {
        path: "/dheeraj-text/speech/Note",
        element:<><Header /><Notess/><Chooice/></>,
      },
      {
        path: "/dheeraj-text/About",
        element: <><Header /><About/></>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
