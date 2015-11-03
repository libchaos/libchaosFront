 var Action = React.createClass({
    render: function() {
    return (

      <div className="name clearfix">
        <a href="http://libchaos.github.io" className="visit-libchaos">hello, everyone</a>
      </div>
    );
  }
});

    ReactDOM.render(<Action />, document.getElementById('action'));
