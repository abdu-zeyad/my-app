import React, { useState } from 'react';
import Modal from 'react-bootstrap/Card';

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
  
    return (
      <>
        
  
        <Modal show={show} onHide={handleClose}>
          
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          
        </Modal>
      </>
    );
  }

  class Main extends React.Component {




    render() {
      return (
        <div>
          {
                <Example />

          }
        </div>
        
      )
    }
  }
  

export default Main; 
