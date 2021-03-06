import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import scrollToElement from 'scroll-to-element';

class NavItem extends Component {
  scrollTo = () => {
    scrollToElement(this.props.element, {
      duration: 700
    });
  }

  render() {
    return (
      <Nav.Link onClick={this.scrollTo}>{this.props.text}</Nav.Link>
    )
  }
}

class UserNavbar extends Component {  
  constructor(props) {
    super(props);
    
    this.state = {
      scroll: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = (event) => {
    console.log(window.pageYOffset);

    if(window.pageYOffset <= 50) {
      this.setState({
        scroll: false
      });
    } else {
      this.setState({
        scroll: true
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.scroll ? 
          <Navbar bg="light" variant="light" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="#home">Ryan Arnouk</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <NavItem element='.about' text='About' />
                  <NavItem element='.projects' text='Projects' />
                  <NavItem element='.skills' text='Skills' />
                  <NavItem element='.blog' text='Blog' />
                  <NavItem element='.contact' text='Contact' />
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>: 
          <Navbar bg="light" variant="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Ryan Arnouk</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <NavItem element='.about' text='About' />
                  <NavItem element='.projects' text='Projects' />
                  <NavItem element='.skills' text='Skills' />
                  <NavItem element='.blog' text='Blog' />
                  <NavItem element='.contact' text='Contact' />
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        }
      </div>
    );
  }
}

export default UserNavbar; 