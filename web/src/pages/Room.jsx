import React from 'react';
import '../App.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
class Room extends React.Component {
  render(){
    const images=[
      {
        original: require("../images/berkeleyroom1.png"),
        thumbnail: require("../images/berkeleyroom1.png"),
      },
      {
        original: require("../images/berkeleyroom2.png"),
        thumbnail:require("../images/berkeleyroom2.png"),
      },
      {
        original:require("../images/berkeleyroom3.png"),
        thumbnail:require("../images/berkeleyroom3.png"),
      },
      {
        original:require("../images/berkeleyroom4.png"),
        thumbnail:require("../images/berkeleyroom4.png"),
      },
      {
        original:require("../images/berkeleyroom5.png"),
        thumbnail:require("../images/berkeleyroom5.png"),
      },
      {
        original:require("../images/berkeleyroom6.png"),
        thumbnail:require("../images/berkeleyroom6.png"),
      },
      {
        original:require("../images/berkeleyroom7.png"),
        thumbnail:require("../images/berkeleyroom7.png"),
      },
      {
        original:require("../images/berkeleyroom8.png"),
        thumbnail:require("../images/berkeleyroom8.png"),
      }
    ]
    return (


       <ImageGallery items={images}/>
    );
  }
}
export default Room;
  /*
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div className="col" id="roombox">
        <img src={this.props.img} className="room"/>
        <p className="room-num"> #{this.props.number}{this.props.name}</p>
      </div>

    );

  }
}


export default Room;
*/
