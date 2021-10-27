import React, {Component} from 'react';
import './splash-screen.scss';
import earthImg from "../../images/earth.png"

function SplashScreen() {
  return (
    <div className="splash-screen-wrapper">
      <div className="splash-screen">
        <div className="topText">YOUR WORLD</div>
        <img className="earthSplash" src={earthImg} />
        <div className="bottomText">IS JUST A DOT IN <strong>SPACE</strong></div>
      </div>
    </div>
  );
}

// Higher Order Component that will render the component passed to it after rendering
// the splashscreen for x seconds. Can be changed to wait for something to load.
function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 14000)
    }

    render() {
      if (this.state.loading) return SplashScreen();

      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;