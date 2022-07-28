const canvas = document.getElementById('drawing-board');
const canvasOut = document.getElementById('drawing-board-outline');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');
const submitButton = document.querySelector("#sub");

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

submitButton.addEventListener('click', function (){
  const dataURI = canvas.toDataURL("image/png");
  console.log(dataURI);

  
/*
    let formData = new FormData();           
    formData.append("file", fileupload.files[0]);
    await fetch('/upload.php', 
    {
      method: "POST", 
      body: formData
    });

  location.href = "doodles.html";

  

  var blob = dataURItoBlob(dataURI);
  var fd = new FormData(document.forms[0]);
  var xhr = new XMLHttpRequest();

  var today = new Date();
  var date = today.getFullYear()+(today.getMonth()+1)+today.getDate();
  var time = today.getHours()+today.getMinutes()+today.getSeconds();
  var dateTime = date+time;


  fd.append(dateTime, blob);
  xhr.open('POST', '/', true);
  xhr.send(fd);
  */
  
});

function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {type: mimeString});
}

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
/*
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
  */