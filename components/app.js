var React = require('react');
// var ReactDOM = require('react-dom');
var Title = require('./title.js');
var Name = require('./name.js');
var Action = require('./Action.js');
var Heros = require('./heros.js');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <Title />
          <Name />
          <Action />
          <Heros />
        </div>
      );
  }
});
module.exports = App;

