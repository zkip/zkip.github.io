addEventListener('load', start);

let canvas;
let ctxs = [];
let ctx;
let mx = 0;
let my = 0;
function prepare() {
  const canvasList = document.querySelectorAll('#stage>canvas') || [];
  Array.from(canvasList).map(fitResolution);

  ctx = ctxs[0];
  canvas = canvasList[0];

  function fitResolution(cvs, i) {
    console.log(cvs, i);
    ctxs[i] = cvs.getContext('2d');
    cvs.width = cvs.offsetWidth;
    cvs.height = cvs.offsetHeight;
  }
  addEventListener('resize', () => {
    Array.from(canvas).map(fitResolution);
  });
  addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    const cvs = event.composedPath()[0];

    if (cvs.nodeName === 'CANVAS') {
      const bound = cvs.getBoundingClientRect();
      mx = clientX - bound.x;
      my = clientY - bound.y;
      canvas = cvs;
      ctx = cvs.getContext('2d');
    } else {
      mx = clientX;
      my = clientY;
    }

    if (canvas.classList.contains('slave')) {
      draw();
    }
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillRect(mx, my, 100, 100);
}
function start() {
  prepare();

  const d = () => {
    if (canvas.classList.contains('master')) {
      draw();
    }
    requestAnimationFrame(d);
  };
  requestAnimationFrame(d);
}
