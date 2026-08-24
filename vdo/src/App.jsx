import React from 'react'
import './App.css'
function App() {
  return (
    <div>
      <video src="https://ik.imagekit.io/cezio3tkd/Play-it/play-it_pr.mp4?tr=w-800"
      width="800" height="450"
       controls 
       autoPlay
       muted
       loop
       poster="https://ik.imagekit.io/cezio3tkd/Play-it/play-it_poster.jpg?tr=so-12,fo-auto" 
      />  
     
      <track kind = "subtitles" src="english.vtt" srclang="en" label="English" default />
       <track kind = "subtitles" src="hindi.vtt" srclang="hi" label="Hindi"/>
    </div>
  );
}

export default App;