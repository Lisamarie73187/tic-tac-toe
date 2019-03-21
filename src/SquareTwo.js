import React, { Component } from 'react'

import './App.css'


class Square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startGame: 'start',
            player: '',
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: ''

        }
    }


    startGame = () => {
        this.setState({
            startGame: 'choose',
            player: '',
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: ''
        })
    };

    setPlayer = (player) => {
        this.setState({
            player: player,
            startGame: 'reset'
        })
    };

    render() {
        return (
            <div>
                <div className="title">The Most Amazing Tic-Tac-Toe Ever</div>
                {this.state.startGame === 'choose' && (
                    <div className="selectWrapper">
                        <div className="whoStartsFirst">
                            Who starts first?
                        </div>
                        <div className="letsPlayWrapper">
                            <div className="letsPlayX" onClick={() => this.setPlayer('X')}>X</div>
                            or
                            <div className="letsPlayO" onClick={() => this.setPlayer('0')}>O</div>
                        </div>
                    </div>
                )}
                {this.state.startGame === 'start' && (
                    <div className="selectWrapper" onClick={this.startGame}>
                        <div className="letsPlay">Let' Play</div>
                    </div>
                )}
                {this.state.startGame === 'reset' && (
                    <div className="resetWrapper" onClick={this.startGame}>
                        <div className="reset">Reset</div>
                    </div>
                )}
                <div className="board">
                    <div className="square" >{this.state.one}</div>
                    <div className="square" >{this.state.two}</div>
                    <div className="square" >{this.state.three}</div>
                    <div className="square" >{this.state.four}</div>
                    <div className="square" >{this.state.five}</div>
                    <div className="square" >{this.state.six}</div>
                    <div className="square" >{this.state.seven}</div>
                    <div className="square" >{this.state.eight}</div>
                    <div className="square" >{this.state.nine}</div>
                </div>
            </div>
        )
    }
}



export default Square
