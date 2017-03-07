var React = require('react');


var SongDetail = function(props) {

    var songDetails = props.songs.map(function(song, index){

    var chartPos = <h3>{index + 1}</h3>; 
    var coverThumb = <a href={song['link'][0]['attributes']['href']}>
                      <img src={song['im:image'][2]['label']} />
                      </a>;
    
    var songTitle= <a href={song['link'][0]['attributes']['href']}>{song['im:name']['label']}</a>;
    var artist = <a href={song['im:artist']['attributes']['href']}>{song['im:artist']['label']}</a>;
    var audio = <audio id="audio" src={song['link'][1]['attributes']['href']} controls="controls"/>;

 return (
       <div className="song-detail" key={song['id']['attributes']['im:id']}>
          <div className="poster">
           <p>
             {coverThumb}
           </p>
          </div>
          <div className = "info">
           {chartPos}
              <ul>
               <li> Song Title: -   {songTitle} </li>
               <li> Artist :-       {artist} </li>
               <li> Audio Sample: - {audio} </li>
              </ul>
           </div>
       </div>
     );
   });

   return (
     <div className="songs-detail">
       {songDetails}
     </div>
   );
 };


module.exports = SongDetail;
