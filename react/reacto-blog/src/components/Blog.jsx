import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

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
      <div>
      <h1>{ title} </h1>
      <ul>
        {blogs.length > 0 ? (
        blogs.map(blogs => (
        <li key={blogs.id}>
        <br/>
        <Link className="links" to={`/blog/${blogs.id}`}>{ blogs.title} </Link>
        </li>
        ))
        ) : (
        <li>No Issue Data</li>
        )}
    </ul>
    </div>
      );
    }
  }

export default Blog;

