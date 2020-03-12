import React from 'react';

import Contact from '../component/Contact.js'

it('Contact renders correctly', () => {

    expect(<Contact />).toMatchSnapshot();
});
