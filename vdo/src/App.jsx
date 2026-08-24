import React from 'react'
import './App.css'
function App() {
  return (
    <div>
      <video src="your-video-file.mp4?tr=w-900"
      width="800" height="450"
       controls 
       autoPlay
       muted
       loop
       poster="your-poster-image.jpg" 
      />  
    </div>
  );
}

export default App;