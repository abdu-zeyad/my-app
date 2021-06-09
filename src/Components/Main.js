import React from "react";
import Hornedbeast from "./Hornedbeast";
// import data from "./data.json";
import Form from "./Form";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Form filtermodel={this.props.filtermodel} />
        {this.props.selecteditems.map((item) => {
          return (
            <Hornedbeast
              showModal={this.props.showModal}
              title={item.title}
              horns={item.horns}
              description={item.description}
              url={item.image_url}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
