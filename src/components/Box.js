import  React from 'react';
import Button from 'react-bootstrap/Button';
 

 export class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname:"peter",
            lname:"parkal"
        }
        this.changefname = this.changefname.bind(this)
    }
    
     
    changefname(){
        this.setState({
            fname:"Gangadhar"
        })
        console.log("I am here")
    }
    componentDidMount(){
        console.log("component mounted")
    }  
    componentWillMount(){
        console.log("called before Component")
    }
    componentDidUpdate(){
        console.log("I am updated")
    }
    // shouldComponentUpdate(){
    //     if(this.state.fname === "Gangadhar"){
    //         return true
    //     }
    //    else{
    //     return false

    //    } 
    // }
    
    render(){
       return (
       <div className='box-red'>
            This is red box
            <br></br>
            {this.props.hero}
            <br></br>
            {this.props.hero1}
            <br></br>
            {this.state.fname}  {this.state.lname}
            <br></br>
            <Button onClick={this.changefname}>Change</Button>
        </div>
       )  
    }


}

// export class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { date: new Date() };
//     }
//     render() {
//       return (
//         <div>
//           {this.props.isPrecise
//             ? this.state.date.toISOString()
//             : this.state.date.toLocaleTimeString()}
//         </div>
//       );
//     }
//     componentDidMount() {
//       const oneSecond = 1000;
//       this.intervalID = setInterval(() => {
//         this.setState({ date: new Date() });
//       }, oneSecond);
//     }
//     componentWillUnmount() {
//       clearInterval(this.intervalID);
//     }
//   }
