import React from 'react';

import App from '../component/App.js'

it('App renders correctly', () => {

    expect(<App />).toMatchSnapshot();
});
