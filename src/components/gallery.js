import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Navbar from "./global/navbar";
import PageHeader from "./global/page-header";
import Gallery from "./gallery-components/gallery";
import Footer from "./global/footer";
import { Helmet } from "react-helmet";

const GalleryPage = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <Helmet>
        <title>Gallery | {` ${rpdata?.dbPrincipal?.name}`}</title>
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
        headertitle="Gallery"
        Subheader="Gallery"
        bgimg={rpdata?.gallery?.[2]}
      />
      <Gallery />
      <Footer />
    </div>
  );
};

export default GalleryPage;
