import React from 'react';

class Clickable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
        }
    }

    clickMe = () => {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    render() {
        return(
            <>
                <button onClick={this.clickMe}>やめて!</button>
                <p>Clicks: {this.state.clicks}</p>
            </>
        )
    }
}

export default Clickable;