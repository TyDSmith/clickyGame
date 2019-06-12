import React, {Component} from 'react';
import cryptocards from '../cryptocards.json';

class GameComponent extends Component {

    render(){
        // var i=0;
        // console.log(cryptocards);
  
        // for (i=0;i<cryptocards.length;i++){
        //     console.log(cryptocards[i].name);
            
            
        // }
        // const cryptocards  = this.props.cryptocards;
        const cryptoList = cryptocards.map((cryptocards.id) => {
            return (
                <li key = {cryptocards.id}>
                    {this.cryptocards.name}
                </li>
            );
        });

    return (
            <ul>        
                {cryptoList}
            </ul>
    )
    };

}

    

export default GameComponent;