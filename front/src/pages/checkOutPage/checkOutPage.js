import {render } from "react-dom"
import React, { useState, useEffect } from "react"
import {Tabs, Tab, Sonnet} from "react-bootstrap"


function CheckOutPage() {
    
    const [key, setKey] = useState('Home');
    
    return (
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="home" title="Home">
          <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet />
        </Tab>
      </Tabs>
    );
  }
  
  render(<CheckOutPage />);