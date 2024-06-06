import React from "react";
import WeComponent from "./we/we";
import ProjectComponent from "./projects/projects";
import ServiceComponent from "./service/service";
import AchievementComponent from "./achivement/achievement";
import NewsComponent from "./news/news";
import PartnerComponent from "./partner/partner";
import HeaderBanner from "./header-banner/header-banner";
import "./home.scss";

const Home=()=>{
    return(<>
    <HeaderBanner/>
      <WeComponent/>
      <ServiceComponent/>
      <ProjectComponent/>

      <AchievementComponent/>
      <NewsComponent/>
      <PartnerComponent/>
    </>)
}
export default Home;