import React from 'react';
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import SelectedBeast from './Components/SelectedBeast '
import Data from './Components/data.json'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayModal: false,
      Data: Data,
      beastData: Data,
      selectedBeast: {}
    }
  }

  showModal = (name) => {

    const selectedBeast = Data.find(beast => beast.title.includes(name) );
    console.log(selectedBeast);

    this.setState({ selectedBeast, displayModal: true });
  }

  hideModal = () => {
    this.setState({ displayModal: false });
  }

  render() {
    return (
      <div>
        <Header />
        <Main showModal={this.showModal} />
        <SelectedBeast displayModal={this.state.displayModal} hideModal={this.hideModal} selectedBeast={this.state.selectedBeast} />

        <Footer />
      </div>
    )
  }
}


export default App;
