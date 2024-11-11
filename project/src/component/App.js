import React from "react";
import GameControl from "./GameControl";
import GameArea from "./GameArea";
import Message from "./Message";
import './App.css';
import { generateSequence, checkSequenceIsValid } from '../util/sequence';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 4,
            minRows: 3,
            maxRows: 12,
            cols: 4,
            minCols: 3,
            maxCols: 12,
            sequence: generateSequence(4, 4),
            winner: false,
            moves: 0,
            timeElapsed: 0,
            started: false, // Track if the game has started
            solvedMessage: '', // New state for solved message
        };
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.solvePuzzle = this.solvePuzzle.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTimer() {
        this.timer = setInterval(() => {
            if (!this.state.winner) {
                this.setState((prevState) => ({ timeElapsed: prevState.timeElapsed + 1 }));
            }
        }, 1000);
    }

    initializePuzzle(rows, cols) {
        let sequence = Array.from({ length: rows * cols - 1 }, (_, i) => i + 1);
        sequence.push(null); // Empty space at the end
        return sequence;
    }

    handleNewGame(rows, cols) {
        clearInterval(this.timer); // Clear previous timer
        this.setState({
            rows: rows,
            cols: cols,
            sequence: this.initializePuzzle(rows, cols),
            winner: false,
            moves: 0,
            timeElapsed: 0,
            started: false, // Reset started state
            solvedMessage: '', // Reset solved message
        });
    }

    handleMove(number, ref) {
        if (this.state.winner) return;

        // Start the timer if the game hasn't started yet (first move)
        if (!this.state.started) {
            this.setState({ started: true });
            this.startTimer();
        }

        let numberInd = this.state.sequence.indexOf(number);
        let numberRow = Math.floor(numberInd / this.state.cols);
        let numberCol = numberInd % this.state.cols;

        let nullInd = this.state.sequence.indexOf(null);
        let nullRow = Math.floor(nullInd / this.state.cols);
        let nullCol = nullInd % this.state.cols;

        let diffRow = Math.abs(numberRow - nullRow);
        let diffCol = Math.abs(numberCol - nullCol);

        let move = null;
        if (diffRow === 1 && diffCol === 0) {
            move = numberRow > nullRow ? 'slideUp' : 'slideDown';
        } else if (diffRow === 0 && diffCol === 1) {
            move = numberCol > nullCol ? 'slideLeft' : 'slideRight';
        }

        if (move) {
            ref.current.classList.add(move);
            setTimeout(() => {
                let sequence = this.state.sequence.slice();
                sequence[nullInd] = number;
                sequence[numberInd] = null;
                const winner = checkSequenceIsValid(sequence);
                this.setState((prevState) => ({
                    sequence: sequence,
                    winner: winner,
                    moves: prevState.moves + 1,
                }));
                if (winner) clearInterval(this.timer); // Stop the timer if the player wins
            }, 300);
        }
    }

    solvePuzzle() {
        const solvedSequence = Array.from(
            { length: this.state.rows * this.state.cols - 1 },
            (_, i) => i + 1
        );
        solvedSequence.push(null); // Empty space at the end
        this.setState({ sequence: solvedSequence, solvedMessage: 'Puzzle Solved!' }); // Set solved message
        clearInterval(this.timer); // Stop the timer when the puzzle is solved
    }
    
    render() {
        const { moves, timeElapsed, solvedMessage } = this.state;
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;

        return (
            <div className="app">
                <div className="header">"{this.state.sequence.length - 1}" puzzle</div>
                <div className="stats">
                    <span>Moves: {moves}</span>
                    <span>Time: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                </div>
                <GameControl
                    rows={this.state.rows}
                    minRows={this.state.minRows}
                    maxRows={this.state.maxRows}
                    cols={this.state.cols}
                    minCols={this.state.minCols}
                    maxCols={this.state.maxCols}
                    handleNewGame={this.handleNewGame}
                    solvePuzzle={this.solvePuzzle}
                />
                <Message winner={this.state.winner} message={solvedMessage} /> {/* Pass solved message */}
                <GameArea
                    rows={this.state.rows}
                    cols={this.state.cols}
                    sequence={this.state.sequence}
                    handleMove={this.handleMove}
                />
            </div>
        );
    }
}
