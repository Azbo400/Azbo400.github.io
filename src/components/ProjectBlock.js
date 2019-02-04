import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import Fade from 'react-reveal/Fade';

class ProjectBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    }
  }

  render() {
    return (
      <div className="square" onMouseEnter={this.hover} onMouseLeave={this.hoverLeave}>
        <div className="content column">
          <div className="portfolioblock">
            {this.state.mouseOver ? 
              <div>
              <Fade>
                <div style={{color: 'white', position: 'absolute', zIndex: 2, left: '42%', top: '20%'}}>
                  <h3 style={{fontSize: 22  }}>Link</h3>
                  <FontAwesome name="link" style={{color: 'black', backgroundColor: 'white', cursor: 'pointer', borderRadius: '0.2em', textAlign: 'center'}} size="3x" onClick={() => window.open(this.props.url)}/>
                </div>
              </Fade>
              <div className="image-wrap-grey">
                <img src={this.props.source} className="project-image" alt="project" style={this.props.styling}/>
                <p style={{color: 'white', fontSize: '1em'}}>{this.props.info}</p>
              </div>
              </div>
              :
              <div className="image-wrap">
                <img src={this.props.source} className="project-image" alt="project" style={this.props.styling}/>
                <p style={{color: 'white', fontSize: '1em'}}>{this.props.info}</p>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }

  hover = () => {
    this.setState({mouseOver: true});
  }
  hoverLeave = () => {
    this.setState({mouseOver: false});
  }
}

export default ProjectBlock; 