
import routers from '../../routes/router.ts';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Suspense } from 'react';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    {
      routers.map((item,i)=>{return <Route key={i} path={item.path} Component={item.layout}>
        {item.routes.map(
                (nestedItem,nestedindex)=>{
                  return <Route
                  key={nestedindex} path={nestedItem.path}
                  element={
                    <Suspense
                      fallback={<></>
                        // <div className="loader-container">
                        //   <div className="loader-container-inner">
                        //     <RollingLoader />
                        //   </div>
                        // </div>
                      }
                    >
                      <nestedItem.component />
                    </Suspense>
                  }
                />
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
