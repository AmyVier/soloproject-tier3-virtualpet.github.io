import React from 'react';

class PetInfoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dynamicVariable: 500 };
    }

    decrease() {
        if (this.state.dynamicVariable > 0) {
            this.setState(state => ({
                dynamicVariable: state.dynamicVariable - 5
            }));
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.decrease(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
      let style = {
        backgroundColor: "DodgerBlue",
        height: "20px",
        width: `${this.state.dynamicVariable}px`
      };
        return <div style={style}> </div>;
    }
}

export default PetInfoBar;