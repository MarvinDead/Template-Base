import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Navbar from "./global/navbar";
import PageHeader from "./global/page-header";
import About from "./about-components/block-about";
import Counter from "./about-components/counter";
import ValuesAbout from "./about-components/values-about";
import BlockAbout from "./about-components/block-about-two";
import Footer from "./global/footer";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <Helmet>
        <title>About | {` ${rpdata?.dbPrincipal?.name}`}</title>
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
      <PageHeader
        headertitle="About Us"
        Subheader="About"
        bgimg={`${rpdata?.stock?.[6]}`}
      />
      <About />
      <Counter />
      <ValuesAbout />
      <BlockAbout />
      <Footer />
    </div>
  );
};

export default AboutPage;
