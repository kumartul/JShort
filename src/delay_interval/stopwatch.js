// Class: Stopwatch class that can be used as a real stopwatch
class Stopwatch{

    duration = 0;
    stopwatchRunning = false;

    // Function: Starts the stopwatch
    /*
    1. If the stopwatch is not running, then it will start the stopwatch else it will throw an error
    2. It will increment the duration every second if the stopwatch has not stopped
    */
    start(){
        if(this.stopwatchRunning){
            throw new Error("Failed to execute 'Stopwatch.start': Stopwatch is already running");
        }
        else{
            this.stopwatchRunning = true;
            this.incrementDuration = setInterval(() => {
                this.duration++;
            }, 1000);
        }
    }

    // Function: Stops the stopwatch
    /*
    1. If the stopwatch is running, it will stop the stopwatch else it throw an error
    2. It will stop the incrementation of the duration
    */
    stop(){
        if(this.stopwatchRunning){
            clearInterval(this.incrementDuration);
        }
        else{
            throw new Error("Failed to execute 'Stopwatch.stop': Stopwatch has already stopped")
        }
    }

    // Function: Resets everything and starts from scratch! 😎
    reset(){
        this.duration = 0;
        this.stopwatchRunning = false;
        if(this.stopwatchRunning){
            clearInterval(this.incrementDuration);
        }
    }

    // Function: Returns the duration of the stopwatch
    get duration(){
        return this.duration;
    }
}

export { Stopwatch }