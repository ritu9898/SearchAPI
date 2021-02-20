import React from "react";
import Square from "./square";

class Board extends React.Component {
    constructor(){
        super();
    }

    render(){
       const arr = [1,2,3,4,5];

        return(
            <div>
                <Square value={4} />
                <Square value={5} />
                <Square value={6} />
            </div>
        )
    }
  }

  export default Board;