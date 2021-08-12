export const loadPost = async() =>{

    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts")
    const imgResponse = fetch("https://jsonplaceholder.typicode.com/photos")
    
    const [posts, photos] = await  Promise.all([postResponse, imgResponse])
    const postsjson = await posts.json()
    const photojson =await photos.json()
    const postsAndPhotos = postsjson.map((post, i)=>{
      return {...post, cover: photojson[i].url}
    })
    return postsAndPhotos
}