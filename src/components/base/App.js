
import Home from '../home/home.tsx';
import routers from '../../routes/router.ts';
import { BrowserRouter, Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from '../UserLayout/MainLayout/main-layout.tsx';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    {
      routers.map((item,i)=>{return <Route key={i} path={item.path} Component={item.layout}>
        {item.routes.map(
                (nestedItem,nestedindex)=>{
                  return <Route key={nestedindex} path={nestedItem.path} Component={nestedItem.component}></Route>
                }
              )}
      </Route>})
    }
    {/* {
          routers.map((item)=>
            {return <Route path={item.path} element={item.layout}>
              {item.routes.map(
                (nestedItem)=>{
                  return <Route path={``} element={<Home/>}></Route>
                }
              )}
            </Route>}
          )
    } */}
    </Routes>

    </BrowserRouter>
  );
}

export default App;
