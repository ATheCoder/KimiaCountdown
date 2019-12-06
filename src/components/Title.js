import React from "react"

class Title extends React.Component {
    constructor(props){
        super(props)
        this.state = {changeColor: false}
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({changeColor: !this.state.changeColor})
        }, 1000)
    }
    render() {
        return (
            <div style={{...style.title, color: this.state.changeColor ? "#7FDBFF" : "#85144b"}}>
                Until Kimia reaches Tehran
            </div>
        )
    }
}

const style = {
    title: {
      position: "relative",
      fontSize: 50,
      left: "1000px",
      bottom: "80px",
      color: "#85144b",
      fontWeight: 400,
      width: "600px",
      transition: "1000ms",
      position: 'relative',
      zIndex: 1000
    }
  }

export default Title