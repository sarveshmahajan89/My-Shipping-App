import React from 'react';

import Footer from '../component/Footer.js'

it('Footer renders correctly', () => {

    expect(<Footer />).toMatchSnapshot();
});
