var React = require('react');
// var ReactDOM = require('react-dom');

var Name = React.createClass({
  render: function() {
    return (

      <div className="name clearfix">
        <h2>libchaos</h2>
        <p>Just a newbee 这里，会有什么呢？</p>
        <a href="http://libchaos.github.io" className="visit-libchaos">访问</a>
      </div>
    );
  }
});

module.exports = Name;
