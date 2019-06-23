import React from 'react';
import RouteDom from '../../components/route-dom';

export default () => (
  <RouteDom
    id="not-found"
    title="Not Found"
    description="Couldn't find the page you are looking for"
    noCrawl
  >
    <p>Page Not Found</p>
  </RouteDom>
);