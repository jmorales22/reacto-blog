import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SingleBlog from './SingleBlog';

class Blog extends Component {
  state = {
    blogs: [],
    title: 'Crazy Coronavirus Blog'
  };

  async getData() {
    const response = await fetch('http://localhost:3001/all');
    const data = await response.json();
    console.log('this is the data', data)
    return data;
  };
  async componentDidMount() {
    const blogs = await this.getData();

    this.setState({
      blogs
    });
  }

  render() {
    const { blogs, title } = this.state;

    return (
      <div className="App">
        <div>
        <h1>{ title }</h1>
        <br/>
            {blogs.map(blogs => (
                <SingleBlog blogs={blogs}/>,
                <Link to={`/blog/${blogs.title}`}>{blogs.title}</Link> 
            ))}
        </div>
      </div>
    );
  }
}

export default Blog;

