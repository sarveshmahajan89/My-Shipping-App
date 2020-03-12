import React from 'react';

import SelectedShipmentView from '../component/SelectedShipmentView.js'

it('SelectedShipmentView renders correctly', () => {

    expect(<SelectedShipmentView />).toMatchSnapshot();
});
