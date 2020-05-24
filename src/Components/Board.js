import React, {Component} from 'react';
import Square from './Square'

class Board extends React.Component {
    initState={
        squares:Array(9).fill(null),
        isNext:true
       
    }
    constructor(props){
        super(props);
        this.state=this.initState
    }
    
    handleClick(i){
        const squares = this.state.squares.slice();    
        if(this.calculateWinner(squares)|| squares[i])return;
        // this.isFull(squares);

        squares[i]=this.state.isNext? 'X' :'O';
        this.setState({squares: squares,
        isNext:!this.state.isNext
        });
    }

     calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

      isFull(squares){
          let flag=true;
          for(let i=0;i<9;i++) if(squares[i]===null) flag=false;
        //   if(flag)co
          return flag;
      }
    
     playAgain(){
          this.setState(this.initState);
      }

    renderSquare(i) {
      return <Square value={this.state.squares[i]}  onClick={()=>{this.handleClick(i)}} />;
    }
  
    render() {
        let winner= this.calculateWinner(this.state.squares);
        let full = this.isFull(this.state.squares);
        let status
        if(winner){
            status= winner+"Won!!";
        }else if(full){
            status='ITS A TIE!!!';
        }
        else{
            status = 'Next player: '+(this.state.isNext? 'X' :'O');
            
        }
  
      return (
        <div className="board">
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

          <button className="play-again" onClick={()=>{this.playAgain()}}>Play Again</button>
        </div>
      );
    }
  }

  export default Board;