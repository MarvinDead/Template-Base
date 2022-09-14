import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Navbar from "./global/navbar";
import PageHeader from "./global/page-header";
import ContactForm from "./contact-components/contact-form";
import Footer from "./global/footer";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <Helmet>
        <title>Contact | {` ${rpdata?.dbPrincipal?.name}`}</title>
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
        headertitle="Contact"
        Subheader="Contact"
        bgimg={rpdata?.gallery?.[7]}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
