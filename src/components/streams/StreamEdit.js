import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./streamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    // console.log("StreamEdit", formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props);

    if (!this.props.stream) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          // initialValues={this.props.stream} It passes all the properties, which can be bad, such as ID, UserId
          initialValues={_.pick(this.props.stream, "title", "description")} // Using lodash to help with that, just get the title and description
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
