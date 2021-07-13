import React, { Component } from 'react';

export class ControlButton extends Component {
  render() {
    return (
      <div className="buttonBox">
        {/* <input type="button" value="이전"/>
            <input type="button" value="다음"/> */}
        <button
          onClick={event => {
            event.preventDefault();
            this.props.onChangeMode('delete');
          }}
        >
          이전
        </button>
        <button
          onClick={event => {
            event.preventDefault();
            this.props.onChangeMode('create');
          }}
        >
          다음
        </button>
      </div>
    );
  }
}

export default ControlButton;
