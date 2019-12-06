import React from "react"

class NumberWithLabel extends React.Component {
    componentwillR
    render() {
        return (
            <div style={style.container}>
                <div style={{...style.number, transform: this.props.shouldAnimate ? (this.props.plus ? "scale(1.1)" : "rotate(0deg)") : "",
                    color: this.props.isRed ? "#FF0000" : "#F012BE"}}>
                    {this.props.number}
                </div>
                <div style={style.label}>
                    {this.props.label}
                </div>
            </div>
        )
    }
}

const style = {
    container: {
        margin: "80px",
        fontWeight: "100"
    },
    number: {
        fontSize: 120,
        width: 130,
        height: 160,
        textAlign: 'center',
        color: "#F012BE",
        transition: 'transform 150ms',
        position: 'relative',
        zIndex: 1000
    },
    label: {
        fontSize: 30,
        position: "relative",
        display: "inline",
        left: "100px",
        bottom: "30px",
        color: "#DDDDDD",
        position: 'relative',
        zIndex: 1000
    }
}

export default NumberWithLabel