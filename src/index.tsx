import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import { AlbumList } from './pages/AlbumList';
import { AlbumView } from "./pages/AlbumView"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>

  },

  {
    path: "/albumlist",
    element: <AlbumList></AlbumList>,

  },


  {
    path: "/albumlist/:id",
    element: <AlbumView></AlbumView>

  },

]);

root.render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
