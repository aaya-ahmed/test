import routers from "../../../routes/router";
import HeaderComponent from "../../../components/shared/header/headerComponent"
import { Outlet } from "react-router-dom"
import FooterComponent from "../../../components/shared/footer/footer";

const MainLayout=()=>{
    const routerList = routers.find(p=>p.path=='/').routes;
    return<>
        <HeaderComponent routerList={routerList} />
            <Outlet />
        <FooterComponent routerList={routerList} />
    </>
}
export default MainLayout