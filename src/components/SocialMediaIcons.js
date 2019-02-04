import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SocialMediaIcons extends Component {
  render() { 
    return (  
      <div className="social-icons">
        <a href="https://twitter.com/ryanarnoukk" target="_blank" rel="noopener noreferrer"><FontAwesome name="twitter"/></a>
        <a href="https://github.com/Azbo400" target="_blank" rel="noopener noreferrer"><FontAwesome name="github" /></a>
        <a href="https://freecodecamp.com/azbo400" target="_blank" rel="noopener noreferrer"><FontAwesome name="free-code-camp" /></a>
        <a href="https://instagram.com/ryanarnouk" target="_blank" rel="noopener noreferrer"><FontAwesome name="instagram" /></a>
      </div>
    );
  }
}
 
export default SocialMediaIcons;