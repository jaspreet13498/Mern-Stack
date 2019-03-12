import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    state ={
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            //console.log('Response from API',res);
            this.setState({
              posts: res.data.slice(0, 10)
            })
            //console.log('Our home state',this.state.posts);
        })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className='post card' key={post.id}>

                        <div className='card-content'>
                            <Link to = {'/' + post.id} >
                                <span className='card-title'>{post.title}</span>
                            </Link>

                            <ul>
                                <li>{post.id}</li>
                                <li>{post.email}</li>
                                <li>{post.body}</li>
                            </ul>

                        </div>
                    </div>
                )
            })
        ) : (
            <p className='center'> No posts yet </p>
        )

        return(
            <div className='center'>
                <h4 className='container'>Homepage</h4>
                { postList }
            </div>
        )
    }
}

export default Home;
