(function(){
    var videos = Array.from(document.querySelectorAll("video"));
    var canvases = [];
    for(let video of videos){
        let canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);
        canvases.push(canvas);
    }

    if(canvases.length == 0) return;

    var newwindow = window.open();
    newwindow.document.body.appendChild(document.createTextNode("right click save as like a chump"));
    for(let canvas of canvases){
        newwindow.document.body.appendChild(canvas);
    }

})();
