import './App.scss';
import Main from './Main';
import SignIn from './SignIn';
import TokenContext from './TokenContext';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: (<Main />)},
    { path: '/sign-in', element: (<SignIn />)}
  ]);
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <TokenContext.Provider value={{token, setToken}}>
        <RouterProvider router={router}/>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
