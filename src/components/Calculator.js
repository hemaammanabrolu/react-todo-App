import * as  React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const Calculator = () => {
    const [speedObj,setspeedObj] =React.useState({
        kmph :0,
        mph : 0
    });
    const convertKmphtoMph = (kmph) =>{
        const mph = kmph/1.6;
        setspeedObj({
            kmph: kmph,
            mph: mph
        });
  
    } 
    const convertMphtoKmph = (mph) =>{
        const kmph = mph*1.6;
        setspeedObj({
            kmph: kmph,
            mph: mph
        });

    } 
    return (
        <Card className = 'post-card 'style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title>Speed Convertor</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Converted Kmph to mph
                </Card.Subtitle>
                <hr/>
                <Card.Text>
                   {/* input boxes goes here */}
                   <SpeedInput type ={2}converter= {convertKmphtoMph} speed = {speedObj.kmph}/>
                   <SpeedInput type ={1} converter= {convertMphtoKmph} speed = {speedObj.mph}/>
                </Card.Text>
                
            </Card.Body>
        </Card>
      );
};
    
// const KmphInput = ({converter,speed}) =>{
//   // const handler = (e)=>{
//   //   converter(e.target.value);
//   // }
//     return(
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Speed (KMPH)</Form.Label>
//           <Form.Control type="number"
//             onChange={(e) =>converter(e.target.value) }
//             value={speed}
//             placeholder="Enter speed in kmph" />
   
//         </Form.Group>
//       </Form>
//     )
// }
// const givenNumber = ()=>{
//   return 1;
// }
// const MphInput = ({converter,speed}) =>{
//   // const handler = (e)=>{
//   //   converter(e.target.value);
//   // }
//     return(
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Speed (MPH)</Form.Label>
//           <Form.Control type="number"
//             onChange={(e) => converter(e.target.value)}
//             value={speed}
//             placeholder="Enter speed in mph" />

//         </Form.Group>
//       </Form>
//     )
// }
const SpeedInput = ({converter,speed ,type}) =>{ //mph =1,kmph=2
  return(
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Speed ({type === 1 ?'MPH':'KMPH' })</Form.Label>
        <Form.Control type="number"
          onChange={(e) => converter(e.target.value)}
          value={speed}
         // placeholder={type ===1 ?'Enter speed in mph':'Enter speed in Kmph' }
         placeholder={`Enter speed in ${type === 1 ?'Mph':'Kmph'}`}/>




      </Form.Group>
    </Form>
  )
}
export default Calculator;