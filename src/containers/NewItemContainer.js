import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewItem from '../components/NewItem';

import { updateNewItemValue } from '../actions/newItemActions.js';
import { addNewItem } from '../actions/itemsActions';

const mapStateToProps = ({ newItemValue }) => ({ value: newItemValue });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewItemValue,
    addNewItem
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
