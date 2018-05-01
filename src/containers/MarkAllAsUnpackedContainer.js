import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { markAllAsUnpackedRequest } from '../actions/itemsActions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ markAllAsUnpackedRequest }, dispatch);
};

export default connect(null, mapDispatchToProps)(({ markAllAsUnpackedRequest }) => (
  <button className="full-width" onClick={markAllAsUnpackedRequest}>
    Mark All as Unpacked
  </button>
));
