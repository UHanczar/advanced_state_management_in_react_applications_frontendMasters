import { connect } from 'react-redux';

import Filter from '../components/Filter';
import { updatePackedItemsFilter } from '../actions/filterActions';

const mapStateToProps = ({ filter }) => {
  return {
    value: filter.packedItemsFilter,
  };
};

const mapDispatchToProps = dispatch => ({
  updateFilter(value) {
    dispatch(updatePackedItemsFilter(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
