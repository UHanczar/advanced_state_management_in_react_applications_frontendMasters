import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { undoItemAction, redoItemAction } from '../actions/itemsActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  undo: undoItemAction,
  redo: redoItemAction
}, dispatch);

export default connect(null, mapDispatchToProps)(({undo, redo}) => (
  <div style={{ margin: '1em 0'}}>
    <button onClick={undo} style={{ marginRight: '20px'}}>Undo</button>
    <button onClick={redo}>Redo</button>
  </div>
));
