import React from "react";
import StreamForm from "./streamForm";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

export default connect(null, {
  createStream,
})(StreamCreate);
