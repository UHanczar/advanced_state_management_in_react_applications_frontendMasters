import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewItem from '../components/NewItem';

import { updateNewItemValue, clearNewItemValue } from '../actions/newItemActions.js';
import { addNewItem } from '../actions/itemsActions';

const mapStateToProps = ({ newItemValue }) => ({ value: newItemValue });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNewItemValue,
    addNewItem,
    clearNewItemValue
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
