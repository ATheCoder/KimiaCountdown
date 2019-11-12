import React from "react"
import NumberWithLabel from "./NumberWithLabel"

class Counter extends React.Component {
    constructor(props){
        super(props)
        let whenKimiaIsBack = Date.UTC("2019", "11", "12", "16", "30")
        this.state = {secondsTillKimia: Math.floor((whenKimiaIsBack - Date.now()) / 1000), plus: false}
    }

    componentDidMount(){
        this.counterInterval = setInterval(() => {
            this.setState({secondsTillKimia: this.state.secondsTillKimia - 1, plus: true})
            setTimeout(() => {
                this.setState({plus: false})
            }, 150)
        }, 1000)
    }

    render() {
        let tillKimiaObject = convertSeconds(this.state.secondsTillKimia)
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <NumberWithLabel number={tillKimiaObject.day} label="Days" />
                <NumberWithLabel number={tillKimiaObject.hour} label="Hours" />
                <NumberWithLabel number={tillKimiaObject.minute} label="Minutes" />
                <NumberWithLabel shouldAnimate={true} plus={this.state.plus} number={tillKimiaObject.seconds} label="Seconds" />
            </div>
        )
    }
}


let convertSeconds = ( seconds ) => {
    let day, hour, minute;
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}

export default Counter