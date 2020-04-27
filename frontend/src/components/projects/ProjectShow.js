import React from 'react';
import {connect} from 'react-redux';

import {fetchProject} from '../../actions';

class ProjectShow extends React.Component {

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchProject(id);

  }

  render() {
    if (!this.props.project) {
      return <h1>Loading...</h1>
    }
    return (<div>
      <h1>{this.props.project.title}</h1>
      <p>{this.props.project.description}</p>
    </div>);
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchProject})(ProjectShow);
