import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/PostActions'

class FetchPost extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() { 
        return (  
            <button onClick={this.props.fetchPostsNow}>
                Fetch Posts Now
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
        fetchPostsNow: () => dispatch(fetchPosts())
})
 
export default connect(null, mapDispatchToProps)(FetchPost);