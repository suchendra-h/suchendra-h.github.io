import { useEffect, useRef } from "react";
import "../static/css/App.css";

function App() {
  const numCircle = 700;
  const maxRadius = 100;
  const speed = 3;
  const ref = useRef();
  const colorArray = [
    "rgba(16,69,79,",
    "rgba(79,98,102,",
    "rgba(128,130,116,",
    "rgba(163,170,119,",
    "rgba(189,224,55,",
  ];
  useEffect(() => {
    let mouse = {
      x: undefined,
      y: undefined,
    };
    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });
    ref.current.width = window.innerWidth;
    ref.current.height = window.innerHeight;
    const c = ref.current.getContext("2d");

    class Circle {
      constructor(x, y, dx, dy) {
        const radius = Math.random() * maxRadius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.startRadius = radius;
        const color_p1 =
          colorArray[Math.floor(Math.random() * colorArray.length)];
        const color_p2 = Math.random();
        this.color = color_p1 + color_p2 + ")";
      }
      draw() {
        c.beginPath();
        //   create the circle
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        // c.strokeStyle = "rgba(0,0,250,0.9)";
        // c.stroke();
        c.fillStyle = this.color;
        c.fill();
      }
      update() {
        this.draw();
        this.y += this.dy;
        if (
          this.y + this.radius >= window.innerHeight ||
          this.y - this.radius <= 0
        ) {
          this.dy = -1 * this.dy;
        }

        this.x += this.dx;
        if (
          this.x + this.radius >= window.innerWidth ||
          this.x - this.radius <= 0
        ) {
          this.dx = -1 * this.dx;
        }
        //mouse interactive
        if (
          Math.abs(this.x - mouse.x) < 50 &&
          Math.abs(this.y - mouse.y) < 50
        ) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > 0.1 * maxRadius) {
          this.radius -= 1;
        }
      }
    }

    let circleArray = [];
    for (let i = 0; i < numCircle; i++) {
      let x = Math.random() * (window.innerWidth - 2 * maxRadius) + maxRadius;
      let y = Math.random() * (window.innerHeight - 2 * maxRadius) + maxRadius;

      //   randomize velocity
      let dx = (Math.random() - 0.5) * speed;
      let dy = (Math.random() - 0.5) * speed;
      circleArray.push(new Circle(x, y, dx, dy));
    }

    function animate() {
      requestAnimationFrame(animate);

      //   start from a clean frame
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }
    animate();
  }, []);
  return (
    <div className="App">
      <canvas ref={ref}></canvas>
    </div>
  );
}

export default App;
