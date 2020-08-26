import React from 'react';
import {connect} from 'react-redux';

import {fecthBoardMembers} from '../../actions';

class Board extends React.Component {

  componentDidMount() {
    this.props.fecthBoardMembers();
  }

  renderList() {
    return this.props.members.map(member => {
      return (<div className="item" key={member.id}>
        <h2>
          {member.name}
          {member.lastname}
        </h2>
        <h3>({member.role_english})</h3>
      </div>);
    });
  }
  render() {
    return (<div>
      <h1>Board Members</h1>
      {this.renderList()}
    </div>);
  }
}
const mapStateToProps = (state) => {
  return {
    members: Object.values(state.board_members)
  }
}

export default connect(mapStateToProps, {fecthBoardMembers})(Board);
