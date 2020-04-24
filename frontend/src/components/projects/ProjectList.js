import React from 'react';
import {connect} from 'react-redux';

import {fetchProjects} from '../../actions';

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
    console.log(this.props.projects);
  }
  render() {
    return <div>ProjectList</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    projects: Object.values(state.projects)
  }
}

export default connect(mapStateToProps, {fetchProjects})(ProjectList);
