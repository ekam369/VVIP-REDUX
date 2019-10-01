import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
    componentDidMount(){
        console.log(this.props)
    }
  render() {
    return (
      <div>
        <h1>Posts are : </h1>
        {
            this.props.posts.map((v,i)=>{
                return(
                    <div key={i}>
                        <div>Title Is {v.title}</div>
                    </div>
                )
            })
        }
      </div>
    );
  }
}

const mapStateToProps = () => state => ({
    posts: state.Posts.postsResponse
});

export default connect(mapStateToProps)(Post);
