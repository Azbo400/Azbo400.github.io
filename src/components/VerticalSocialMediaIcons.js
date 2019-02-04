import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class VerticalSocialMediaIcons extends Component {
  render() { 
    return (  
      <div className="social-icons-black">
        <a href="https://twitter.com/ryanarnoukk" target="_blank" rel="noopener noreferrer"><FontAwesome name="twitter"/></a><br />
        <a href="https://github.com/Azbo400" target="_blank" rel="noopener noreferrer"><FontAwesome name="github" /></a><br />
        <a href="https://freecodecamp.com/azbo400" target="_blank" rel="noopener noreferrer"><FontAwesome name="free-code-camp" /></a><br />
        <a href="https://instagram.com/ryanarnouk" target="_blank" rel="noopener noreferrer"><FontAwesome name="instagram" /></a>
      </div>
    );
  }
}
 
export default VerticalSocialMediaIcons;