import React from 'react';
import Score from './score';
import Card from './card';

function TopHeader(props){
    return(
        <div id="TopHeader">
            <h1>Crypto Clicky Game</h1>
            {/* <Score 
                total={this.state.score}
                goal={12}
                status={this.state.status}
                topscore={this.state.topscore}
            /> */}
            {/* <Card 
                scoreCount={this.scoreCount}
                id={crypto.id}
                key={crypto.key}
                image={crypto.image}
            /> */}
        </div>
        
    );
};



export default TopHeader;