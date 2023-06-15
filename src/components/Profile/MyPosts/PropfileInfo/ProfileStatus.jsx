import React from "react";

class ProfileSatus extends React.Component {
  state = {
    editMode: false                           //Хорошее название для режима редактирования
  }

  activeEditMode() {
    this.setState({
      editMode: true
    });
  }

  deactiveEditMode() {
    this.setState({
      editMode: false
    });
  }

  render() {
    return <>
      <div>
        {!this.state.editMode &&
          <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span>
        }
      </div>
      <div>
        {this.state.editMode &&
          <input autoFocus={true} onBlur={this.deactiveEditMode.bind(this)} value={this.props.status}></input>
        }
      </div>
    </>
  }
}

export default ProfileSatus;