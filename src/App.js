import './App.css';
import { Component } from 'react'
class App extends Component {
  state = {
    posts: [],
  }
  loadPosts = async () => {
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts")
    const imgResponse = fetch("https://jsonplaceholder.typicode.com/photos")
    
    const [posts, photos] = await  Promise.all([postResponse, imgResponse])
    const postsjson = await posts.json()
    const photojson = await photos.json()

    const postsAndPhotos = postsjson.map((post, i)=>{
      return {...post, cover: photojson[i].url}
    })
    this.setState({posts: postsAndPhotos})
    
  }
  componentDidMount() {
    this.loadPosts()
  }
  render() {
    const { posts } = this.state
    return (
      <div className="container">
        <div className="posts">
          {
            posts.map(x => (
              <div className="post" key={x.id}>
                <div className="post-content">
                  <img src={x.cover} alt= {x.title} />
                  <h1> {x.title} </h1>
                  <p> {x.body} </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
export default App;
