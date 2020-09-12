import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <div>
      <p class ="ErrorMessageTitle"> Oops! </p>
      <p class ="ErrorMessageBody"> Looks like you wandered to the wrong page! Please click one of the tabs above to return!</p>
      </div>
    );

  }
}

export default Error;
