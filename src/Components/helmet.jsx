import React from 'react';
import Helmet from 'react-helmet';

export default class UDHelmet extends React.Component {

  render() {

    var content = this.props.content;
    if (!Array.isArray(content))
    {
        content = [content];
    }

    return (
      <Helmet>
         {this.props.content.map(x => {
            return React.createElement(x.tag, x.attributes, x.content);
         })}
      </Helmet>
    );
  }
}