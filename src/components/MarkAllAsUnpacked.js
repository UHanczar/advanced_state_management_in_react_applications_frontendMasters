import React from 'react';
import { inject } from 'mobx-react';

const MarkAllAsUnpacked = inject('itemList')(({ itemList }) => (
  <button className="full-width" onClick={itemList.markAllAsUnpacked}>
    Mark All as Unpacked
  </button>
));

export default MarkAllAsUnpacked;
