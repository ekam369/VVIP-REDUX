import {FETCH_POSTS} from '../actions/types'

const initalState = {
    postsResponse: []
}

export default (state=initalState, action )=>{
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                postsResponse: action.payload
            }
        default:
            return {
                ...state
            }
    }
}