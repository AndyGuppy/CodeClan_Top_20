var React = require('react');
var SongsDetail = require('../components/MusicDetail');

var SongsContainer = React.createClass({

  //Initial State
  getInitialState: function(){
    return {
      songs: []
    };
  },

  //On load of component
  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function(){
      if ( request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({songs: data.feed.entry});
      }
    }.bind(this);
    request.send(null);
  },

  //Render to Screen 
  render: function(){
    return (
      <div id="page">
        <div id="header">Code Clan Top 20</div>
        <div className="songs-container">
          <h2>Top 20</h2>
          <SongsDetail songs={this.state.songs}/>
        </div>
      </div>
    );
  }

});

module.exports = SongsContainer;