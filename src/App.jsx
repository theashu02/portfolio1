import './App.css';
// import BannerSection from './components/common/bannerSection/BannerSection';
// import Navbar from './components/common/navBar/navBar';
// import RingComponent from './components/common/ringComponent/RingComponent';
// import ToggleButton from './components/common/toggleButton/ToggleButton';
import AnalyticsFeatureUI from './components/pages/customer/AnalyticsFeature/AnalyticsFeatureUI';
import BulidingUIPage from './components/pages/customer/BuildingsUI/BulidingUIPage';
// import FeatureMobileAccess from './components/pages/customer/featureMobileAccess/FeatureMobileAccess';
// import FeatureSection from './components/pages/customer/featureUI/FeatureUI';
import ManageUI from './components/pages/customer/ManagementUI/ManageUI';

function App() {

  return (
    <>
      {/* <h1 className="  font-poppins ">hi everyone</h1> */}
      {/* <Navbar /> */}
      {/* <BannerSection /> */}
      {/* <FeatureSection/> */}
      {/* <FeatureMobileAccess /> */}
      <AnalyticsFeatureUI />
      <BulidingUIPage />
      <ManageUI />
    </>
  )
}

export default App;
