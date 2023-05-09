      window.addEventListener("load",() =>{

   console.log("hello");  
      let c = document.querySelector("#myCanvas");
      let ctx = c.getContext("2d");

      // Resizing
      myCanvas.height = window.innerHeight;
      myCanvas.width = window.innerWidth;
      // ctx.beginPath();
      // ctx.moveTo(100,100);
      // ctx.lineTo(100,150)
      // ctx.stroke();

      // Variables
      let painting = false;
      
      function startPosition(){
        painting = true;
        draw(e);

      }
      function finishPosition(){
        painting = false;
        ctx.beginPath();
        
      }

      function draw(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
      }
      // EventListners
      myCanvas.addEventListener("mousedown", startPosition);
      myCanvas.addEventListener("mouseup", finishPosition);
      myCanvas.addEventListener("mousemove", draw);
   
    });