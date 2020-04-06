import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import myClass from './progressBar.module.scss'

export class prograssBar extends Component {
    state = { percent: 33.333 }

    increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 33.333,
    }))

    render() {
        return (
             <div className={myClass.progressBarWrapper}>
                <Progress value='3' total='5' progress='ratio' percent={this.state.percent} indicating />
                <Button onClick={this.increment}>Increment</Button>
            </div>
        )
    }
}

export default prograssBar
