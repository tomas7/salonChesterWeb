import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import myClass from './progressBar.module.scss'

export class prograssBar extends Component {
    

    render() {
        let percentage = 33.33

        if (this.props.step === 2) {
            percentage = 66.66
        } else if (this.props.step === 3) {
            percentage = 100
        }
        return (
             <div className={myClass.progressBarWrapper}>
                <Progress value={this.props.step} total='3' progress='ratio' percent={percentage} indicating />
            </div>
        )
    }
}

export default prograssBar
