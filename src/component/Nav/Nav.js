import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Nav=(props)=>{
    console.log(props.location);

    return(
        <div> {props.location.pathname ==='/' ? null:

         <div>
         <Link to='/dashboard'><button>Home</button></Link> 
         <Link to='newPost'><button>New Post</button></Link>  
         <Link to='/'><button>Logout</button></Link>
        </div>}

        
        </div>
    )
    
}





function mapStateToProps(state){
    return {...state}
}

const NavWithLocation= withRouter(Nav)
export default NavWithLocation;
