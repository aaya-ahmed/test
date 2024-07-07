
import routers from '../../routes/router.ts';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Suspense } from 'react';
import './App.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
                      fallback={
                        <div className="loader-container">
                          <div className="loader-container-inner">
                            <img src="../../../public/assets/images/loader.svg" width={'100px'} height={'100px'}/>
                          </div>
                        </div>
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
    </QueryClientProvider>
  );
}

export default App;
