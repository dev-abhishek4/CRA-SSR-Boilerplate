import React from 'react';
import { withRouter } from 'react-router';
import Helmet from 'react-helmet';

const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.SITE_URL;

const defaultTitle = 'SSR-React';
const defaultDescription = 'SSR Boilerplate created with SSR';
const defaultSep = ' | ';

const getMetaTags = ({ description, noCrawl }) => {
  const theDescription = description
    ? description.substring(0, 155)
    : defaultDescription;

  const metaTags = [
    { name: 'description', content: theDescription },
    // One can add Open Graph and twitter cards meta tags that allows us to identify content on page which is to be displayed when someone shares or likes the page
  ];

  if (noCrawl) {
    metaTags.push({ name: 'robots', content: 'noindex, nofollow' });
  }

  // More meta tags can be added as required

  return metaTags;
}

const RouteDom = (props) => {

  const { children, id, className, ...rest } = props;

  return (
    <div id={id} className={className}>
      <Helmet
        htmlAttributes={{
          lang: 'en',
          itemscope: undefined,
          itemtype: `http://schema.org/${rest.schema || 'WebPage'}`
        }}
        title={
          rest.title ? defaultTitle + defaultSep + rest.title : defaultTitle
        }
        link={[
          {
            // A canonical URL lets you tell search engines that certain similar URLs are actually the same
            rel: 'canonical',
            href: SITE_URL + props.location.pathname
          }
        ]}
        meta={getMetaTags(rest)}
      />
      {children}
    </div>
  );
}

export default withRouter(RouteDom);
