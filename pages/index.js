import React, {Component} from "react"; 
import Head from 'next/head'
import Image from 'next/image'

class Home extends Component {

  state = {

    images: [
      "/what-makes-serpentix-belting-drawing.png",
      "/what-makes-serpentix-chain-drawing.png",
      "/what-makes-serpentix-drive-drawing.png",
      "/what-makes-serpentix-support-drawing.png",
      "/what-makes-serpentix-tension-drawing.png",
      "/what-makes-serpentix-track-drawing.png",
      
    ],

    btns : [
      'Tension',
      'Track',
      'Drive',
      'Support',
      'Chain',
      'Bleting'
    ],
    active : 0,
  };
  
  toggleImages = (index) => {
    this.setState({
      active: index,
    });
    console.log(index)
  };

  render() {
    const {
      btns,
      active,
      images,
    } = this.state

    return (
      <div className="container-portrait">
        <div className="row">
          <div className="header">
            <ul className="header-list">
              {btns.map((btns, index) => (
                  <li className={index === active ? "item active" : "item"}
                  onClick={this.toggleImages.bind(this, index)}
                  >
                    {btns}
                  </li>
                ))}
            </ul>
          </div>
          <Image
          src={images[active]}
          width="1080px"
          height="1920px"
          className="conveyor-image"
          />
        </div>
      </div>
    )
  }

}

export default Home;