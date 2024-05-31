import router from '../../../routes/router.ts';
import WeComponent from '../we/we.tsx';
import HeaderComponent from '../header/headerComponent.tsx';
import './App.css';
import ProjectComponent from '../projects/projects.tsx';
import FeatureComponent from '../features/features.tsx';
import AchievementComponent from '../achivement/achievement.tsx';
import PartnerComponent from '../partner/partner.tsx';
import FooterComponent from '../footer/footer.tsx';
import NewsComponent from '../news/news.tsx';

function App() {
  const routerList=router;
  return (
    <div className="App">

      <HeaderComponent routerList={routerList}/>
      <WeComponent/>
      <ProjectComponent/>
      <FeatureComponent/>
      <AchievementComponent/>
      <NewsComponent/>
      <PartnerComponent/>
      <FooterComponent routerList={routerList}/>
    </div>
  );
}

export default App;
