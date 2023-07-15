import * as  React from 'react';
// import { Outlet} from 'react-router-dom'

const Page = (props) =>{
    return (
        <>
        <div className="jumbotron ">
          <h1 className= "display-4 ">{props.title}</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
          <p>It uses utility class for typography and spacing to space content out within the larger container.</p>
         <p className="btn btn-primary btn-lg" href="#" role="button">Learn more</p>
        </div>
      </> 
    );
}

// const Parent = () =>{
//   return (
//     <>
//     <h1>Parent</h1>
    
//     <Outlet/>
//     </>
//   );
// };

export default Page;
// export { Parent}