import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Team from './section-components/team';
import Testimonial from './section-components/testimonial-v3';
import Footer from './global-components/footer-v2';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Team"  />
        <Team />
        <Testimonial />
        <Footer />
    </div>
}

export default AboutPage

