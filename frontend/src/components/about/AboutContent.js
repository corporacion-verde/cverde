import React from 'react';
import {connect} from 'react-redux';

import {fetchContent} from '../../actions';

class AboutContent extends React.Component {

  componentDidMount() {
    this.props.fetchContent(this.props.code);
  }

  render() {
    if (!this.props.content) {
      return <h1>Loading...</h1>;
    }
    return (<div>
      <h1>{this.props.content.title}</h1>
      <p>{this.props.content.content}</p>
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    content: state.general_content[ownProps.code]
  }
}

export default connect(mapStateToProps, {fetchContent})(AboutContent);
