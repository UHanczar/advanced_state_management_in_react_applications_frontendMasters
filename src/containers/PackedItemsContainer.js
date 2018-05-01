import { connect } from 'react-redux';
import Items from '../components/Items';

import { toggleItemREquest, removeItemRequest } from '../actions/itemsActions';

const mapStateToProps = ({ items, filter }) => {
  return { items: items.filter(item => item.packed && item.value.includes(filter.packedItemsFilter)) };
};

const mapDispatchToProps = dispatch => ({
  onCheckOff(item) {
    dispatch(toggleItemREquest(item));
  },
  onRemove(item) {
    dispatch(removeItemRequest(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
