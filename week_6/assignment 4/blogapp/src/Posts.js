import React from 'react';

class Posts extends React.Component {
  // 5. Initialize the component with an empty list of posts in the state
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // 6. Create a method to fetch data using the Fetch API
  async loadPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // We are not using the Post class here, but directly setting the fetched data
      this.setState({ posts: data });
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      this.setState({ hasError: true });
    }
  }

  // 7. Implement the componentDidMount() hook to call loadPosts()
  componentDidMount() {
    this.loadPosts();
  }

  // 9. Define a componentDidCatch() method for error handling
  componentDidCatch(error, info) {
    console.error("Caught an error:", error, info);
    this.setState({ hasError: true });
  }

  // 8. Implement the render() method to display the posts
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try refreshing the page.</h1>;
    }

    return (
      <div className="posts-container">
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <article key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    );
  }
}

export default Posts;