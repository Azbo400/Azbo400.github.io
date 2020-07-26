import React, { Component } from 'react';

class Announcement extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, color: 'white', backgroundColor: '#F49D6E' }}>
        <p style={{ margin: 0 }}>My new and updated personal website is coming soon. Including updated projects, work experience, new blog posts, and more.</p>
      </div>
    );
  }
}

export default Announcement;