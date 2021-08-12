import './style.css';
import { Component } from 'react'
import { loadPost } from '../../utils/load-post.js'
import { Post } from '../../components/Post'
import { Button } from '../../components/Button/index';

class Home extends Component {
  state = {
    posts: [],
    allPost: [],
    page: 0,
    postsPerPage: 2,
    Blocked: false
  }
  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPost()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPost: postsAndPhotos
    })
  }
  async componentDidMount() {
    await this.loadPosts()
  }

  loadMorePost = () => {
    const { page, postsPerPage, allPost, posts } = this.state
    const nextPage = page + postsPerPage
    posts.push(...allPost.slice(nextPage, nextPage + postsPerPage))
    this.setState({
      page: nextPage,
      posts
    })
    if(posts.length== allPost.length) this.setState({Blocked: true})
  }
  render() {
    const { posts,Blocked } = this.state
    return (
      <div className="container">
        <Post posts={posts} />
        <div className="container-button" >
          <Button disabled={Blocked} onClick={this.loadMorePost} />
        </div>
      </div>
    );
  }
}
export default Home;
