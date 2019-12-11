import React from "react"
import convertToSeconds from '../utils/convertSeconds'

class Flight extends React.Component {
    constructor(props){
        super(props)
        let flightTime = props.timeToFlight
        let flightFinish = props.flightFinish
        this.state = { timeToFlight:  Math.floor((flightTime - Date.now()) / 1000), flightFinish: Math.floor((flightFinish - Date.now()) / 1000) }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({timeToFlight: this.state.timeToFlight - 1, flightFinish: this.state.flightFinish - 1})
        }, 1000)
    }

    render(){
        let { hour, minute, seconds } = convertToSeconds(this.state.timeToFlight)
        if(this.state.flightFinish < 0){
            return (
                <div style={{display: 'flex', justifyContent: 'center', height: '85px', width: '304px', fontSize: 25, ...baseStyle}}>Flight has arrived!</div>
            )
        }
        return (
            <div  style={baseStyle}>
                <div>{`Flight ${this.props.id}`}</div>
                <div>FROM: {this.props.from}</div>
                <div>TO: {this.props.to}</div>
                {
                    this.state.timeToFlight > 0 ? <div>{hour} Hours, {minute} Minutes, {seconds} Seconds to Take off!</div> :
                    <a style={{color: "green"}} href={`https://flightaware.com/live/flight/${this.props.flightCode}`}>ON THE AIR: Click Here for Real Time Tracking!</a>
                }
            </div>
        )
    }

}

const baseStyle = {
    color: 'white',
    position: 'relative',
    zIndex: 1000,
    margin: '100px'
}

export default Flight