import FooterComponent from "../shared/footer/footer";
import Home from "../home/home";
import HeaderComponent from "../shared/header/headerComponent";
import router from "../../routes/router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const routerList=router;
  return (
    <div className="App">

      <HeaderComponent  routerList={routerList}/>
      <BrowserRouter>
      <Routes path="/">
      {routerList.map((item)=>{
        return <Route path={item.path} Component={item.component}/>
      })}
        
      </Routes>
      </BrowserRouter>
      <FooterComponent routerList={routerList}/>
    </div>
  );
}

export default App;
