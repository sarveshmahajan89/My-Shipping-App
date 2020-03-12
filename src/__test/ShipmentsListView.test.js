import React from 'react';

import ShipmentsListView from '../component/ShipmentsListView.js'

it('ShipmentsListView renders correctly', () => {

    expect(<ShipmentsListView />).toMatchSnapshot();
});
