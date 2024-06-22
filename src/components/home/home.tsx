import React from "react";
import WeComponent from "./we/we";
import ProjectComponent from "./projects/projects";
import ServiceComponent from "./service/service";
import AchievementComponent from "./achivement/achievement";
import NewsComponent from "./news/news";
import PartnerComponent from "./partner/partner";
import HeaserSliderComponent from "./header-slider/header-slider";
import "./home.scss";
import HeaderBanner from "./header-banner/header-banner";
import HeaderComponent from "../../components/shared/header/headerComponent";
import FooterComponent from "../../components/shared/footer/footer";
import router from "../../routes/router";

const Home = () => {

  return (<>
    <HeaderBanner />
    {/* <HeaserSliderComponent/> */}
    <WeComponent />
    <ServiceComponent />
    <ProjectComponent />
    <AchievementComponent />
    <NewsComponent />
    <PartnerComponent />
  </>)
}
export default Home;