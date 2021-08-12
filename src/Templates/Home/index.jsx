import './style.css';
import { Component,useState, useEffect } from 'react'
import { loadPost } from '../../utils/load-post.js'
import { Post } from '../../components/Post'
import { Button } from '../../components/Button/index';
import { Input } from '../../components/Input';

const Home = () => {
  const [posts, setposts] = useState([])
  const [allPost, setallPost] = useState([])
  const [page, setpage] = useState(0)
  const [postsPerPage, setpostsPerPage] = useState(2)
  const [Blocked, setBlocked] = useState(false)
  const [search, setsearch] = useState('')

  const loadPosts = async () => {
    const postsAndPhotos = await loadPost()
    setposts(postsAndPhotos.slice(page, postsPerPage))
    setallPost(postsAndPhotos)
  }
useEffect(() => {
  loadPosts()
}, [])
  const loadMorePost = () => {
    const nextPage = page + postsPerPage
    posts.push(...allPost.slice(nextPage, nextPage + postsPerPage))
    setposts(posts)
    setpage(nextPage)
    if (posts.length == allPost.length) setBlocked(true)
  }
  const handlesearchPost = async (e) => {
    const { value } = e.target
    setsearch(value)
    if (!!value) setposts(allPost.filter(post => post.title.toLowerCase().includes(search.toLowerCase())))
    else await loadPosts()
  }
  return (
    <div className="container">
      <div className="searchContainer">
        <Input search={search} handlesearchPost={handlesearchPost} />
      </div>
      <Post posts={posts} />
      <div className="container-button" >
        <Button disabled={Blocked} onClick={loadMorePost} />
      </div>
    </div>
  );
}

export default Home;
