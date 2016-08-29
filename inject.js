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

    var newwindow = window.open();
    for(let canvas of canvases){
        newwindow.document.body.appendChild(canvas);
    }

})();
