import { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';



const Snack = ({url, number, subtitle, description
}) => {

     return (<>
      <div className="col snacks-description  mx-2 p-0" style={{ backgroundColor:"black", borderRadius:"8px"}}>
      <div className="" style={{  
  backgroundImage: "url(" + url + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position:"relative",
  padding:"0",
//   borderRadius:"8px"

}}><div className="layer">
    <div className="snacks-number">{number}</div>
    <h2 style={{backgroundColor:"#0c1a61", paddingTop:"0"}}>{subtitle}</h2>
    </div>
    </div>
    <p className="emp pt-3" dangerouslySetInnerHTML={ {__html: description} } />  
    </div>
    </>);
};

export default Snack;
