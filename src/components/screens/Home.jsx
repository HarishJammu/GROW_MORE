import Hero from "../containers/hero/Hero";
import OurTechnology from "../containers/our-technology/OurTechnology";
import WhatWeDo from "../containers/whatwedo/WhatWeDo";
import WhyOurServices from "../containers/whyourservices/WhyOurServices";
import WhyChooseus from "../containers/whychooseus/WhyChooseus";
// import Footer from "../containers/footer/Footer";
import Reviews from "../containers/reviews/Reviews";
import ScrollButton from "../common/ScrollToTop/ScrollUp";
import StatsCard from "../containers/stat-card/StatsCard";
import OurTeam from "../containers/aboutus/OurTeam";
const Home = () => {
  return (
    <div>
      <Hero />
      <OurTechnology />
      <WhatWeDo />
      <WhyOurServices />
      <WhyChooseus />
      <StatsCard />
      <Reviews />
      <OurTeam />
      {/* <Footer /> */}
      <ScrollButton />
    </div>
  );
};

export default Home;
