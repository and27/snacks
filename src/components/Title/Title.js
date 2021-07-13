import { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../logo_snacks.png'


const Title = ({title
}) => {

     return (<>
      <h1 className="snacks-title pb-5">{title}</h1>
    </>);
};

export default Title;
