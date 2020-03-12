import React from 'react';

import Home from '../component/Home.js'

it('Home renders correctly', () => {

    expect(<Home />).toMatchSnapshot();
});
