import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  
  //const [art, setArt] = useState(null);
  
    
      // fetch("/members").then(
      //   res => res.json()
      // ).then(
      //   data => {
      //     setData(data);
      //     console.log(data);
      //   }
      // )

  function generate() {
    fetch("/art")
      .then((response) => response.text())
      .then(
        html => {
          //reg expression to parse template
          const matches = html.match(/src="(data:image\/png;base64,[^"]+)"/);
          if(matches) {
            const imageSrc = matches[1]
            var canvas = document.querySelector('canvas');
        var context = canvas.getContext('2d');

        var size = 320;
        var dpr = window.devicePixelRatio;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        context.scale(dpr, dpr);
        context.lineWidth = 2;

        var img = new Image();
        img.onload = function() {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = imageSrc;
      }
    }
  )
}
    
  
  
  // var canvas = document.querySelector('canvas');
  // var context = canvas.getContext('2d');
  
  // var size = 320;
  // var dpr = window.devicePixelRatio;
  // canvas.width = size * dpr;
  // canvas.height = size * dpr;
  // context.scale(dpr, dpr);
  // context.lineWidth = 2;
  
  // var step = 10;
  // var lines = [];
  
  // // Create the lines
  // for(var i = step; i <= size - step; i += step) {
      
  //   var line = [];
  //   for(var j = step; j <= size - step; j+= step) {
  //     var distanceToCenter = Math.abs(j - size / 2);
  //     var variance = Math.max(size / 2 - 50 - distanceToCenter, 0);
  //     var random = Math.random() * variance / 2 * -1;
  //     var point = {x: j, y: i + random};
  //     line.push(point);
  //   } 
  //   lines.push(line);
  // }
  
  // // Do the drawing
  // for(var i = 5; i < lines.length; i++) {
  
  //   context.beginPath();
  //   context.moveTo(lines[i][0].x, lines[i][0].y);
    
  //   for(var j = 0; j < lines[i].length - 2; j++) {
  //     var xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
  //     var yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
  //     context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
  //   }
  
  //   context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
  //   context.save();
  //   context.globalCompositeOperation = 'destination-out';
  //   context.fill();
  //   context.restore();
  //   context.stroke();
  //   setArt("not null");
  // }

  return (
    <div className="App">
        <div class="border">
          <div class="frame">
            <canvas class="canvas"></canvas>
          </div>
        </div>
        <button onClick={generate}>
        Generate
      </button>
      {/* <div>
        {(typeof data.members === 'undefined') ? (
          <p>Click generate to serve me up!</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}
      </div> */}
    </div>
  );
}

export default App;
