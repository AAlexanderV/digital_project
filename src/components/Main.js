import "../styles/Main.scss";
import Header from "./Header";
import IntroSlider from "./IntroSlider";
import About from "./About";

function Main() {
  return (
    <div className="Main">
      <div className="container_main">
        <Header />
        <IntroSlider />
        <About />
        {/* <Goals /> */}
        {/* <OurProjects /> */}
        {/* <FeedbackForm /> */}
      </div>
      {/* <Contacts /> */}
    </div>
  );
}

export default Main;
