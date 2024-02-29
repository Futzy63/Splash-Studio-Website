
/*document.addEventListener('DOMContentLoaded', () => {

    const sloganScroll = () => { 
        const scrollStopper = document.querySelector('.slogan-section');
        const scrollStopperClientHeight = scrollStopper.getBoundingClientRect();

        const sloganTextEl = document.getElementById('slogan-text-is1');
        const sloganTextElOpacity = window.getComputedStyle(sloganTextEl).opacity;

        let scrollDistanceToStopper = scrollStopperClientHeight.top + window.pageYOffset;

        const scrollStarter = function() {
            document.addEventListener('wheel',function(event){
                event = event || window.event;
                var y = event.deltaY || event.detail || event.wheelDelta;
                var delta
                if(y > 0) {
                    delta = delta + y
                } else {
                    delta = delta - y
                }
                console.log(delta)

                
                

                if(y > 0) {
                    document.getElementById('slogan-text-is1').style.opacity = sloganTextElOpacity + "0.25";
                } else {
                    document.getElementById('slogan-text-is1').style.opacity = sloganTextElOpacity - "0.25";
                }
            })
        }

        window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY - 135;    
            if (scrollDistance  > scrollDistanceToStopper) {
                document.body.style.overflow = "hidden";
                scrollStarter()
            }
        })

    }
    sloganScroll()
}) */       