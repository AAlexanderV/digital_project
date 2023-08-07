import "../styles/Main.scss";
import Header from "./Header";
import IntroSlider from "./IntroSlider";
import About from "./About";
import Goals from "./Goals";
import OurProjects from "./OurProjects";
import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";

function Main() {
  return (
    <div className="Main">
      <div className="container_main">
        <Header />
        <IntroSlider />
        <About />
        <Goals />
        <OurProjects />
        <FeedbackForm />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
