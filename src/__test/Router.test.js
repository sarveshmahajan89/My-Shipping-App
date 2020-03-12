import React from 'react';

import Router from '../component/Router.js'

it('Router renders correctly', () => {

    expect(<Router />).toMatchSnapshot();
});
