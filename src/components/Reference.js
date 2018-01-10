import {Component} from 'react'
import React from "react";

class Reference extends Component {
    render () {
        return(
            <div className = "Project" onClick={() => { window.history.pushState({}, 'Simmarith\'s Homepage', ''); window.location.replace(this.props.reference.link)}}>
                <img src={ this.props.reference.img } alt="trelloViewer"></img>
                <h2>{ this.props.reference.name }</h2>
                <span>{ this.props.reference.desc }</span>
            </div>
        );
    }
}

export default Reference
