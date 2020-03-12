import React from 'react';

import Navigation from '../component/Navigation.js'

it('Navigation renders correctly', () => {

    expect(<Navigation />).toMatchSnapshot();
});
