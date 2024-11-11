import React from "react";

export default class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    render() {
        return (
            <div
                className="btn"
                ref={this.ref}
                onClick={() => this.props.handleMove(this.props.number, this.ref)}
            >
                {this.props.number}
            </div>
        );
    }
}
