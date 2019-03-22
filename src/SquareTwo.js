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

    componentDidUpdate(prevProps, prevState) {
        if(prevState.player !== this.state.player){
            this.checkWinner()
        }
    }


    startGame = () => {
        this.setState({
            startGame: 'choose',
            xWinner: false,
            oWinner: false,
            player: '',
            one: '',
            two: '',
            three: '',
            four: '',
            five: '',
            six: '',
            seven: '',
            eight: '',
            nine: '',
        })
    };

    setPlayer = (player) => {
        this.setState({
            player: player,
            startGame: 'reset'
        })
    };

    nextPlayer = () => {
        if(this.state.player === 'X'){
            this.setState({
                player: 'O'
            })
        }
        if(this.state.player === 'O'){
            this.setState({
                player: 'X'
            })
        }
    }

    moveOne = () => {
        this.setState({
            one: this.state.player
        })
        this.nextPlayer()
    };

    moveTwo = () => {
        this.setState({
            two: this.state.player
        })
        this.nextPlayer()
    };

    moveThree = () => {
        this.setState({
            three: this.state.player
        })
        this.nextPlayer()
    };

    moveFour = () => {
        this.setState({
            four: this.state.player
        })
        this.nextPlayer()
    };

    moveFive = () => {
        this.setState({
            five: this.state.player
        })
        this.nextPlayer()
    };

    moveSix = () => {
        this.setState({
            six: this.state.player
        })
        this.nextPlayer()
    };

    moveSeven = () => {
        this.setState({
            seven: this.state.player
        })
        this.nextPlayer()
    };

    moveEight = () => {
        this.setState({
            eight: this.state.player
        })
        this.nextPlayer()
    };

    moveNine = () => {
        this.setState({
            nine: this.state.player
        })
        this.nextPlayer()
    };

    checkWinner = () => {
        const {one, two, three, four, five, six, seven, eight, nine} = this.state
        if(one === 'X' & two === 'X' & three === 'X'){
            this.setState({
                xWinner: true,
                startGame: 'start'
            })
        }
        if(one === 'O' & two === 'O' & three === 'O'){
            this.setState({
                oWinner: true,
                startGame: 'start'
            })
        }
        if(one === 'X' & four === 'X' & seven === 'X'){
            this.setState({
                xWinner: true,
                startGame: 'start'
            })
        }
        if(one === 'O' & four === 'O' & seven === 'O'){
            this.setState({
                oWinner: true,
                startGame: 'start'
            })
        }
        if(one === 'X' & five === 'X' & nine === 'X'){
            this.setState({
                xWinner: true,
                startGame: 'start'
            })
        }
        if(one === 'O' & five === 'O' & nine === 'O'){
            this.setState({
                oWinner: true,
                startGame: 'start'
            })
        }
        if(two === 'X' & five === 'X' & eight === 'X'){
            this.setState({
                xWinner: true,
                startGame: 'start'
            })
        }
        if(two === 'O' & five === 'O' & eight === 'O'){
            this.setState({
                oWinner: true,
                startGame: 'start'
            })
        }

        if(three === 'X' & five === 'X' & seven === 'X'){
            this.setState({
                xWinner: true,
                startGame: 'start'
            })
        }
        if(three === 'O' & five === 'O' & seven === 'O'){
            this.setState({
                oWinner: true,
                startGame: 'start'
            })
        }

        if(three === 'X' & six === 'X' & nine === 'X'){
            this.setState({
                xWinner: true,
                startGame: 'start'
            })
        }
        if(three === 'O' & six === 'O' & nine === 'O'){
            this.setState({
                oWinner: true,
                startGame: 'start'
            })
        }

        if(four === 'X' & five === 'X' & six === 'X'){
            this.setState({
                xWinner: true,
                startGame: 'start'
            })
        }
        if(four === 'O' & five === 'O' & six === 'O'){
            this.setState({
                oWinner: true,
                startGame: 'start'
            })
        }

        if(seven === 'X' & eight === 'X' & nine === 'X'){
            this.setState({
                xWinner: true,
                startGame: 'start'
            })
        }
        if(seven === 'O' & eight === 'O' & nine === 'O'){
            this.setState({
                oWinner: true,
                startGame: 'start'
            })
        }

    }


    render() {
        return (
            <div>
                {this.state.xWinner &&
                    <div className="winnerModalOverLay">
                        <div className="winnerModal">
                            <div className="x">X</div>
                            <div className="winner">is the WINNER!!!</div>
                            <div className="resetWrapperModal" onClick={this.startGame}>
                                <div className="resetModal">Reset</div>
                            </div>
                        </div>
                    </div>
                }
                {this.state.oWinner &&
                    <div className="winnerModalOverLay">
                        <div className="winnerModal">
                            <div className="x">O</div>
                            <div className="winner">is the WINNER!!!</div>
                            <div className="resetWrapperModal" onClick={this.startGame}>
                                <div className="resetModal">Reset</div>
                            </div>
                        </div>
                    </div>
                }
                <div className="title">The Most Amazing Tic-Tac-Toe Ever</div>
                {this.state.startGame === 'choose' && (
                    <div className="selectWrapper">
                        <div className="whoStartsFirst">
                            Who starts first?
                        </div>
                        <div className="letsPlayWrapper">
                            <div className="letsPlayX" onClick={() => this.setPlayer('X')}>X</div>
                            or
                            <div className="letsPlayO" onClick={() => this.setPlayer('O')}>O</div>
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
                    <div className="square" onClick={this.moveOne}>{this.state.one}</div>
                    <div className="square" onClick={this.moveTwo}>{this.state.two}</div>
                    <div className="square" onClick={this.moveThree}>{this.state.three}</div>
                    <div className="square" onClick={this.moveFour}>{this.state.four}</div>
                    <div className="square" onClick={this.moveFive}>{this.state.five}</div>
                    <div className="square" onClick={this.moveSix}>{this.state.six}</div>
                    <div className="square" onClick={this.moveSeven}>{this.state.seven}</div>
                    <div className="square" onClick={this.moveEight}>{this.state.eight}</div>
                    <div className="square" onClick={this.moveNine}>{this.state.nine}</div>
                </div>
            </div>
        )
    }
}



export default Square
