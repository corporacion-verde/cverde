import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchProjects} from '../../actions';

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  renderList() {
    return this.props.projects.map(project => {
      return (<div className="item" key={project.code}>
        <Link to={`/projects/${project.id}`}>{project.title}</Link>
      </div>);
    });
  }
  render() {
    return (<div>
      <h1>Projects</h1>
      {this.renderList()}
    </div>);
  }
};

const mapStateToProps = (state) => {
  return {
    projects: Object.values(state.projects)
  }
}

export default connect(mapStateToProps, {fetchProjects})(ProjectList);
