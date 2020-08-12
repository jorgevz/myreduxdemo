import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {Posts} from '../component/Posts'

//Bring in the Asynchronous FetchPosts action
import {fetchPosts} from '../actions/postsActions';


//Redux state is now in the props of this component
const PostsPage =({dispatch,loading, posts, hasErrors})=> {
    useEffect(() => {
        dispatch(fetchPosts())
      }, [dispatch])
    
     
      const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        return posts.map((post) => <Posts key={post.id} post={post} />)
      }
    
      return (
        <section>
          <h1>Posts</h1>
          {renderPosts()}
        </section>
      )
    }
    
    const mapStateToProps = (state) => ({
      loading: state.posts.loading,
      posts: state.posts.posts,
      hasErrors: state.posts.hasErrors,
    })
    
    export default connect(mapStateToProps)(PostsPage)