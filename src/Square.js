import React, { Component } from 'react'

import './App.css'


class Square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            xOrO: false,
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

    firstBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            one: this.state.xOrO ? "X" : "O"
        })
    }
    secondBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            two: this.state.xOrO ? "X" : "O"
        })
    }
    thirdBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            three: this.state.xOrO ? "X" : "O"
        })
    }
    forthBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            four: this.state.xOrO ? "X" : "O"
        })
    }
    fifthBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            five: this.state.xOrO ? "X" : "O"
        })
    }
    sixBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            six: this.state.xOrO ? "X" : "O"
        })
    }
    sevenBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            seven: this.state.xOrO ? "X" : "O"
        })
    }
    eightBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            eight: this.state.xOrO ? "X" : "O"
        })
    }
    nineBoxHandleChange = () => {
        this.setState({
            xOrO: !this.state.xOrO,
            nine: this.state.xOrO ? "X" : "O"
        })
    }

    render() {
        return (
            <div>
                <div className="title">The Most Amazing Tic-Tac-Toe Ever</div>
                <div className="board">
                    <div className="square" onClick={this.firstBoxHandleChange}>{this.state.one}</div>
                    <div className="square" onClick={this.secondBoxHandleChange}>{this.state.two}</div>
                    <div className="square" onClick={this.thirdBoxHandleChange}>{this.state.three}</div>
                    <div className="square" onClick={this.forthBoxHandleChange}>{this.state.four}</div>
                    <div className="square" onClick={this.fifthBoxHandleChange}>{this.state.five}</div>
                    <div className="square" onClick={this.sixBoxHandleChange}>{this.state.six}</div>
                    <div className="square" onClick={this.sevenBoxHandleChange}>{this.state.seven}</div>
                    <div className="square" onClick={this.eightBoxHandleChange}>{this.state.eight}</div>
                    <div className="square" onClick={this.nineBoxHandleChange}>{this.state.nine}</div>
                </div>
            </div>
        )
    }
}



export default Square
