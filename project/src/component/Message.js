import React from "react";
import './Message.css'; // Ensure to import the CSS file for styling

export default class Message extends React.Component {
    render() {
        if (this.props.winner) {
            return (
                <div className="message win-animation">
                    <b>Congratulations! You won!</b><br/>
                    Press "Play!" to start a new game.
                </div>
            );
        } else {
            return null;
        }
    }
}
