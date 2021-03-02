import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Pricing from '../components/sections/Pricing';
import Testimonial from '../components/sections/TestimonialCarousel';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <FeaturesTiles className="illustration-section-02" />
        <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-03" />
        <Pricing topDivider pricingSwitcher />
        <Testimonial hasBgColor invertColor />
        <Cta hasBgColor invertColor className="illustration-section-04" />
      </React.Fragment>
    );
  }
}

export default Home;