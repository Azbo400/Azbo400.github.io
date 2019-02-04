import React, { Component } from 'react';
import rp from 'request-promise-native';
import $ from 'cheerio';
const url = 'https://cors-anywhere.herokuapp.com/http://azbo400.github.io/Blog';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogposts: null
    }
  }

  componentDidMount() {
    rp(url).then((html) => {
      var title = [];
      var date = [];
      var text = [];
      var urls = [];
      var array = [];
      
      $('.blog-post-preview > h1', html).each(function () {
        title.push($(this).text());
      });
    
      $('.blog-post-preview > h2', html).each(function () {
        date.push($(this).text());
      });
    
      $('.blog-post-preview > p', html).each(function () {
        text.push($(this).text());
      });
      
       // blog-post-preview - h1 - a href
      $('.blog-post-preview > h1 > a', html).each(function() {
        urls.push('http://azbo400.github.io' + $(this).attr('href'));
      })
    
      // limit page to around 5 blog posts for now
      for(var i = 0; i < 4; i++) {
        array.push({
          title: title[i],
          date: date[i],
          text: text[i],
          url: urls[i]
        });
      }
    
      this.setState({blogposts: array});
      this.setState({title});
      this.setState({date});
      this.setState({text});
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    if(this.state.blogposts !== null) {
      return (
        <div>
          {Object.keys(this.state.blogposts).map((key) => {
            return (
              <div key={key}>
                <h1 style={{fontSize: 22}}>{this.state.blogposts[key].title}</h1>
                <h3 style={{fontSize: 17}}>{this.state.blogposts[key].date}</h3>
                <p style={{fontSize: 15}}>{this.state.blogposts[key].text} <a href={this.state.blogposts[key].url} target="_blank" rel="noopener noreferrer">Read More</a></p>
                <hr className='line' />
              </div>
            );
          })}  
        </div>
      );
    } else {
      return (
        <div>
          <p>Could not load blog posts</p>
        </div>
      )
    }
  }
}

export default Blog;