import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "Tweet",
      characters: this.props.maxChars
    };
  }

  handleTweetChange = event => {
    this.setState({
      tweet: event.target.value,
      characters: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message"
        onChange={event => this.handleTweetChange(event)}
        value={this.state.tweet}
        />
        <label>{this.state.characters}</label>
      </div>
    );
  }
}

export default TwitterMessage;
