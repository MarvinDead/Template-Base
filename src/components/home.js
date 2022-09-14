import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Navbar from "./global/navbar";
import Banner from "./home-components/banner";
import Values from "./about-components/values";
import HomeBlockOne from "./home-components/home-block";
import RecentProjects from "./home-components/recent-projects-home";
import CallToAction from "./home-components/call-to-action";
import Directories from "./home-components/directories";
import HomeServices from "./home-components/home-services";
import Footer from "./global/footer";
import ModalHome from "./home-components/ModalComponent";
import HomeAbout from "./about-components/block-about";
import Map from "./contact-components/map";
import { Helmet } from "react-helmet";

const Home_V1 = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <Helmet>
        <title>Home | {` ${rpdata?.dbPrincipal?.name}`}</title>
        <meta
          name="description"
          content={`${rpdata?.dbAbout?.[0].text.substring(0, 150) + "..."}`}
        />
        <meta
          name={` ${rpdata?.dbPrincipal?.name}`}
          content={` ${rpdata?.dbPrincipal?.name}`}
        ></meta>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="icon" href={rpdata?.dbPrincipal?.favicon} />
      </Helmet>
      <Navbar />
      <Banner />
      <Values />
      <HomeBlockOne />
      <CallToAction />
      <HomeAbout />
      <Directories />
      <div className="container">
        <h2 className="text-center mt-5">What Our Clients Say</h2>
        <div class="elfsight-app-905d807a-5709-4051-85d0-686e3000700f"></div></div>
      <RecentProjects />
      <HomeServices />
      <ModalHome />
      <Map />
      <Footer />
    </div>
  );
};

export default Home_V1;
