import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() {
        if(this.props.liked)
            return (  <i class="fa fa-heart" aria-hidden="true"></i>);
        else  
        return (  <i class="fa fa-heart-o" aria-hidden="true"></i>);
    }
}
 
export default Like;