import React, { useState } from 'react';
import { connect } from 'react-redux'; // HOC

import { toggleEditing, updateTitle } from '../actions/titleActions';

// STEP II - connect the component
// use the connect function to map our state from the Redux store to the component props

const Title = props => {
  const [newTitleText, setNewTitleText] = useState('');

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editingOnProps ? (
        <h1>
          {props.title}{' '}
          <i className="far fa-edit" onClick={props.toggleEditing} />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => props.updateTitle(newTitleText)}>
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

// STEP IIa - wrap the component in the second connect function call
// STEP IIb - first function call takes in a function and an object
// STEP IIbi - the function we pass is usually named mapStateToProps

const mapStateToProps = state => {
  return {
    title: state.titleReducer.title,
    editingOnProps: state.titleReducer.editing
  };
};

export default connect(
  mapStateToProps,
  { toggleEditing, updateTitle }
)(Title); // function currying
