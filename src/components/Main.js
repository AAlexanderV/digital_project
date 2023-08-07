import "../styles/Main.scss";
import Header from "./Header";
import IntroSlider from "./IntroSlider";
import About from "./About";
import Goals from "./Goals";
import OurProjects from "./OurProjects";
import FeedbackForm from "./FeedbackForm";

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
      {/* <Contacts /> */}
    </div>
  );
}

export default Main;
