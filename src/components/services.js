import Navbar from "./global/navbar";
import PageHeader from "./global/page-header";
import Services from "./services-components/services-card";
import Footer from "./global/footer";
import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import { Helmet } from "react-helmet";

const ServicePage = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <Helmet>
        <title>Services | {` ${rpdata?.dbPrincipal?.name}`}</title>
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
        headertitle="Services"
        Subheader="Services"
        bgimg={rpdata?.stock?.[3]}
      />
      <Services />
      <Footer />
    </div>
  );
};

export default ServicePage;
