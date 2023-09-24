import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import StartGame from "./pages/StartGame";

const Router = createBrowserRouter([ 
    {
      path: '/',
      element: <Home/>
      
    },
    {
      path: '/StartGame',
      element: <StartGame/>
      
    },
  ]
);

function App() {
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App;
