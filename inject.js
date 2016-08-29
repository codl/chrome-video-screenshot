(function(){
    var newwindow = window.open();
    var videos = Array.from(document.querySelectorAll("video"));
    for(let video of videos){
        let canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);
        newwindow.document.body.appendChild(canvas);
    }

})();
