import React from 'react';
import Hornedbeast from './Hornedbeast';
import data from './data.json'
class Main extends React.Component {




  render() {
    return (
      <div>
        {
          data.map(item =>{
            return (
              <Hornedbeast title={item.title} description={item.description} url={item.image_url}/> 
              
            )
          } )
        }
      </div>
      
    )
  }
}


export default Main;