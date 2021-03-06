import React from "react";
import Title from './title'
import clams from '../data/clam_results'

class ClamContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedClam = clams.filter((cl) => cl.id === this.props.match.params.type)[0]

    return <div className="clam-container">
        <Title title={`You got: ${selectedClam.name}!`} />
        <div className="clam-card">
          <div className="clam-result">
            <img className="clam-result-img" src={`/images/${selectedClam.img}`} />
          </div>
          <div className="clam-description">{selectedClam.description}</div>
        </div>
      </div>;
  }
}

export default ClamContainer;
