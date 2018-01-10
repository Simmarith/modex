import {Component} from "react";
import React from "react";
import Reference from "./Reference";
import trelloLogo from '../images/trelloViewer.png';
import uberhacker from '../images/uberhacker.png';


class References extends Component {
    constructor() {
        super();
        this.state = {
            references: [
                {
                    name: 'TrelloViewer',
                    img: trelloLogo,
                    desc: 'The overcomplicated Trello Dashboard',
                    link: 'https://github.com/munichmakerlab/trelloViewer'
                },
                {
                    name: 'uberhacker',
                    img: uberhacker,
                    desc: '"Hack" together - or against each other',
                    link: 'https://github.com/Simmarith/uberhacker'
                }
            ]
        }
    }

    render() {
        let references = [];
        this.state.references.forEach((reference) => {
            references.push(<Reference reference={reference} />);
        });

        return (
            <div className = "Projects">{references}</div>
        );
    }
}

export default References
