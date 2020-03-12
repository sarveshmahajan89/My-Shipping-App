import React from 'react';

import About from '../component/About.js'

it('About renders correctly', () => {

    expect(<About />).toMatchSnapshot();
});
