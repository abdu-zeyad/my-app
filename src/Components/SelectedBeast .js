import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.displayModal} onHide={this.props.hideModal}>
      <Modal.Dialog>
        <Modal.Header   closeButton />
        <Modal.Title class="text-left">{this.props.selectedBeast.keyword}</Modal.Title>         
          <Card style={{ width: '18rem'}}>
          <Card.Title>{this.props.selectedBeast.title}</Card.Title>
            <Card.Img src={this.props.selectedBeast.image_url} />
            <Card.Body>
              <Card.Text>{this.props.selectedBeast.description}</Card.Text>
            </Card.Body>
          </Card>   
        <Modal.Footer>
    <Button onClick={this.props.hideModal}>close</Button>
  </Modal.Footer>
      </Modal.Dialog>

      </Modal>
    )
  }
}

export default SelectedBeast;
