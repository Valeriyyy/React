import React from "react";
import { connect } from "react-redux";

/* const UserHeader = () => {
  userEffect(() => {

  })
    
  return <div>User Header </div>;
}; */

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <div>...Loading</div>;
    }
    return <div className="header">{user.data.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.data.id === ownProps.userId),
  };
};
export default connect(mapStateToProps)(UserHeader);
