import './style.css';
import { useState, useEffect, useCallback } from 'react'
import { loadPost } from '../../utils/load-post.js'
import { Post } from '../../components/Post'
import { Button } from '../../components/Button/index';
import { Input } from '../../components/Input';

const Home = () => {
  const [posts, setposts] = useState([])
  const [allPost, setallPost] = useState([])
  const [page, setpage] = useState(0)
  const [postsPerPage] = useState(2)
  const [Blocked, setBlocked] = useState(false)
  const [search, setsearch] = useState('')

  const loadPosts = useCallback(async () => {
    const postsAndPhotos = await loadPost()
    setposts(postsAndPhotos.slice(page, postsPerPage))
    setallPost(postsAndPhotos)
  },[])

  useEffect(async() => {
    await loadPosts()
  }, [loadPosts, postsPerPage])
  const loadMorePost = () => {
    const nextPage = page + postsPerPage
    posts.push(...allPost.slice(nextPage, nextPage + postsPerPage))
    setposts(posts)
    setpage(nextPage)
    if (posts.length === allPost.length) setBlocked(true)
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
      {
        posts.length !== 0 && <Post posts={posts} />
      }
      {
        posts.length === 0 && <p>Não existem posts</p>
      }
      <div className="container-button" >
        <Button disabled={Blocked} onClick={loadMorePost} />
      </div>
    </div>
  );
}

export default Home;
