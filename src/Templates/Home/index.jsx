import './style.css';
import { Component } from 'react'
import { loadPost } from '../../utils/load-post.js'
import { Post } from '../../components/Post'
import { Button } from '../../components/Button/index';
import { Input } from '../../components/Input';

class Home extends Component {
  state = {
    posts: [],
    allPost: [],
    page: 0,
    postsPerPage: 2,
    Blocked: false,
    search: ''
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
    if (posts.length == allPost.length) this.setState({ Blocked: true })
  }
  handlesearchPost = async (e) => {
    const { search, posts, allPost } = this.state
    const { value } = e.target
    this.setState({ search: value })
    if (!!value) this.setState({ posts: allPost.filter(post => post.title.toLowerCase().includes(search.toLowerCase())) })
    else await this.loadPosts()
  }
  render() {
    const { posts, Blocked, search } = this.state
    return (
      <div className="container">
        <div className="searchContainer">
          <Input search={search} handlesearchPost={this.handlesearchPost} />
        </div>
        <Post posts={posts} />
        <div className="container-button" >
          <Button disabled={Blocked} onClick={this.loadMorePost} />
        </div>
      </div>
    );
  }
}
export default Home;
