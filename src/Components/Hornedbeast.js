import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Hornedbeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: 0
    }
  }

  incrementNumOfHorns = () => {
    this.setState({
      horns: this.state.horns + 1
    });
    this.props.showModal(this.props.title);
  }
  render() {
    return (
      <div>

        {/* <p> Title: {this.props.title}</p>
        <img src={this.props.url} alt={this.props.title}  width ='200px' hight='15s0px'/>
        <p className='description'>description: {this.props.description}</p>
 */}

        <Card style={{ width: '20rem' }}  onClick={this.incrementNumOfHorns}>
          <Card.Img variant="top" src={this.props.url} />
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
            <Card.Text>
              💙 {this.state.horns}
            </Card.Text>
            <p className='description'>description: {this.props.description}</p>
          </Card.Body>
        </Card>



      </div >
    )
  }
}

export default Hornedbeast;