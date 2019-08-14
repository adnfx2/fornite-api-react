import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import heroImgLandscape from "../../assets/images/fortniteHeroLandscape.jpg";
import heroImgPortrait from "../../assets/images/fortniteHeroPortrait.jpeg";
import { DEVICE_WIDTH_SM } from '../../utils/constants/bootstrap_constants';

class Hero extends React.Component {
  state = {
    screenWidth: window.innerWidth
  };

  handleScreenResize = () =>
    this.setState({
      screenWidth: window.innerWidth
    });

  componentDidMount() {
    window.addEventListener("resize", this.handleScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScreenResize);
  }

  render() {
    const { screenWidth } = this.state;
    const image =
      screenWidth < DEVICE_WIDTH_SM
        ? { selectedImage: heroImgPortrait, style: "pr-4 pl-4" }
        : { selectedImage: heroImgLandscape, style: "" };
    return (
      <div>
        <Jumbotron fluid={true}>
          <img
            className={`d-block w-100 ${image.style}`}
            src={image.selectedImage}
            alt="Fortnite Hero Image"
          />
        </Jumbotron>
      </div>
    );
  }
}

export default Hero;
