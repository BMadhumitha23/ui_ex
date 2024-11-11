import React from "react";
import Btn from "./Btn";

export default class GameArea extends React.Component {
    render() {
        let rows = [];
        for (let r = 0; r < this.props.rows; r++) {
            let cols = [];
            for (let c = 0; c < this.props.cols; c++) {
                let index = r * this.props.cols + c;
                let number = this.props.sequence[index];
                if (number) {
                    cols.push(
                        <div key={c} className="col">
                            <Btn
                                number={number}
                                handleMove={this.props.handleMove}
                            />
                        </div>
                    );
                } else {
                    cols.push(<div key={c} className="col" />);
                }
            }
            rows.push(<div key={r} className="row">{cols}</div>);
        }
        return <div className="game-area">{rows}</div>;
    };
}
