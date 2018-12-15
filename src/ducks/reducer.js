const initialState={
    username:"",
    id:"",
    profilePic: ""
}

    const UPDATE_USERNAME='UPDATE_USERNAME'













export default function reducer(state= initialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
        return {...state, username: action.payload}
    default:
    return state
    }
}