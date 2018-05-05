import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import NewItem from './NewItem';
import PackedItems from './PackedItems';
import UnpackedItems from './UnpackedItems';
import MarkAllAsUnpacked from './MarkAllAsUnpacked';

import './Application.css';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <NewItem onSubmit={() => {}} />
        <UnpackedItems />
        <PackedItems />
        <MarkAllAsUnpacked />
      </div>
    );
  }
}

export default Application;
