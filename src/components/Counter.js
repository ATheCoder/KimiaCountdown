import React from "react"
import NumberWithLabel from "./NumberWithLabel"
import convertSeconds from "../utils/convertSeconds"

class Counter extends React.Component {
    constructor(props){
        super(props)
        let whenKimiaIsBack = Date.UTC("2019", "11", "12", "16", "30")
        this.state = {secondsTillKimia: Math.floor((whenKimiaIsBack - Date.now()) / 1000), plus: false, isRed: false}
    }

    componentDidMount(){
        this.counterInterval = setInterval(() => {
            this.setState({secondsTillKimia: this.state.secondsTillKimia - 1, plus: true})
            setTimeout(() => {
                this.setState({plus: false})
            }, 150)
        }, 1000)

        this.colorAnimator = setInterval(() => {
            this.setState({isRed: true})
            setTimeout(() => {
                this.setState({isRed: false})
            }, 1000)
        }, 2000)
    }

    render() {
        let tillKimiaObject = convertSeconds(this.state.secondsTillKimia)
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <NumberWithLabel isRed={this.state.isRed} number={tillKimiaObject.day} label="Days" />
                <NumberWithLabel isRed={!this.state.isRed} number={tillKimiaObject.hour} label="Hours" />
                <NumberWithLabel isRed={this.state.isRed} number={tillKimiaObject.minute} label="Minutes" />
                <NumberWithLabel isRed={!this.state.isRed} shouldAnimate={true} plus={this.state.plus} number={tillKimiaObject.seconds} label="Seconds" />
            </div>
        )
    }
}

export default Counter