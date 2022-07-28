const canvas = document.getElementById('drawing-board');
const canvasOut = document.getElementById('drawing-board-outline');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

var canvasOffsetX = canvas.offsetLeft;
var canvasOffsetY = canvas.offsetTop;

window.onresize = resizeActions;

function resizeActions() {
    canvasOffsetX = canvas.offsetLeft;
    canvasOffsetY = canvas.offsetTop;
}

canvas.height = (window.innerHeight - canvasOffsetY) * 0.7;
canvas.width = canvas.height;


let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});


const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - window.innerHeight * 0.1);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mouseleave', (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
  });

canvas.addEventListener('mousemove', draw);

$('.page').each(function(i,e){
    $(this).click(function(event){
      var x = event.pageX;
      var y = event.pageY;
      
      var nextItem = i + 1;
      if (nextItem >= $('.page').length){
        nextItem = 0;
      }
      
      $('.page:eq('+ nextItem +')').css('z-index', parseInt($(this).css('z-index')) + 1);
      $('.page:eq('+ nextItem +')').css('clip-path', 'circle(0% at '+ x +'px '+ y +'px)');
      
      anime({
        targets: $('.page')[nextItem],
        update: function(anim) {
          $('.page:eq('+ nextItem +')').css('clip-path', 'circle('+ (anim.progress*2) +'% at '+ x +'px '+ y +'px)');
        }
      });
    });
  });
  