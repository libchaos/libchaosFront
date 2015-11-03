var Heros = React.createClass({
  render: function() {
    return (

      <div className="heros clearfix">
        <div className="hero"><img src="images/hulk.jpg" alt className="cover" /></div>
        <div className="hero"><img src="images/captain_america.jpg" alt className="cover" /></div>
        <div className="hero"><img src="images/she-hulk.jpg" alt className="cover" /></div>
        <div className="hero"><img src="images/spider-man.jpg" alt className="cover" /></div>
        <div className="hero"><img src="images/captain-marvel.jpg" alt className="cover" /></div>
      </div>
    );
  }
});

ReactDOM.render(<Heros />, document.getElementById('heros'));
