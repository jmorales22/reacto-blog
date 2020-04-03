import React, {Component} from 'react';

class SingleBlog extends Component {
  state = {
    blogs: []
  };

  async getData() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:3001/blog/${id}`);
    const data = await response.json();
    return data;
  };
  async componentDidMount() {
    const blogs = await this.getData();

    this.setState({
      blogs: blogs
    });
  }

  render() {
    const { blogs } = this.state;
    console.log('single blog state', blogs)

    return (
      <div>
        {blogs.map(blog =>
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <h3>{blog.full_name}</h3>
            <p>{blog.content}</p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleBlog;