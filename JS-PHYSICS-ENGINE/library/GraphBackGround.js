class GraphBackGround {
    constructor(){
        this.alpha = 0.4;
    }
    
    draw(){
            for(let i=0; i<height;i++){
                if(i%20 == 0){
                    if(i%100 == 0){
                        context.lineWidth = "3";
                    } else {
                        context.lineWidth = "1"
                    }

                    
                    context.strokeStyle = "rgba(0,0,0," + this.alpha + ")";
                    context.beginPath();
                    context.moveTo(0,i);
                    context.lineTo(width,i);
                    context.closePath();
                    context.stroke();
                }
        }
    }
}