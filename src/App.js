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
        backgroundColor: this.props.color,
        height: "20px",
        width: `${this.state.dynamicVariable}px`
      };
        return (<div style={style}> </div>);
    }
}

function HungerBar() {
  return (<div class = "DynamicVariable">
    <h1>Hunger: </h1>
    <PetInfoBar color="brown" />
    </div>);
}

function HealthBar() {
  return (<div class = "DynamicVariable">
    <h1>Health: </h1>
    <PetInfoBar color="forestgreen" />
    </div>);
}

function HappinessBar() {
  return (<div class = "DynamicVariable">
    <h1>Happiness: </h1>
    <PetInfoBar color="orchid" />
    </div>);
}

export {HungerBar, HealthBar, HappinessBar};