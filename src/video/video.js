class Video{
    // Function: Creates a simple video element and returns it
    static Create(url, hasControls=true, autoplay=false, loop=false, muted=false, defaultPlaybackRate=1){

        const video = document.createElement('video');
        video.setAttribute('src', url);
        
        if(hasControls){
            video.setAttribute('controls', true);
        }

        if(autoplay){
            video.setAttribute('autoplay', true);
        }

        if(loop){
            video.setAttribute('loop', true);
        }

        if(muted){
            video.setAttribute('muted', true);
        }

        if(defaultPlaybackRate >= 0){
            video.playbackRate = defaultPlaybackRate;
        }

        return video;
    }
}

export { Video }

// Tasks
/*
1. Write a regex that will check whether the URL's format is correct or not
*/