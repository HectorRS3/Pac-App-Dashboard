//working on this
import React, {useState} from 'react'

class Post extends React.Component {
     constructor() {
         super();
         this.state = {
             post: [
                 {title: "Poooooooooost", date: "21/enero/2021"},
                 {title: "Poooooooooost", date: "31/enero/2021"},
                 {title: "poooooooooost", date: "6/noviembre/2020"}
             ]
         }

         this.fetchPost = this.fetchPost.bind(this);
     }

     componentWillMount() {
         this.fetchPost()
     }

     async fetchPost() {
          //Fetch code...
     }

     render() {
         return(
             <div>
                 <h1>Posts</h1>
                 <ul>
                 {
                     this.state.posts.map(post => {
                     return <li>{post.title} - {post.date}</li>
                     })
                 }
                 </ul>
             </div>
         );
     }
 }

export default Post