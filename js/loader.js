//SCRIPT FOR LOADING ANIMATION

//Event Listener for loading
window.addEventListener('DOMContentLoaded', function () {
    
    //SVG timeline and disabling scroll for duration of loading
    const svg_timeline = gsap.timeline({paused: true})
    document.body.style.overflow = 'hidden';

    //Obtaining path
    const path = this.document.getElementById('svg-n-path')
    const pathLength = path.getTotalLength()

    //Constructing SVG timeline to draw stroke and fill svg
    document.getElementById('svg-n-path').style.stroke = "#fff" //Changing stroke color to white before timeline
    gsap.set(path, {strokeDasharray: pathLength, strokeDashoffset: pathLength, stroke: '#fff', attr: {"stroke-width": 5}})
    svg_timeline.to('#svg-n-path', {strokeDashoffset: 0, duration: 3, ease: 'power2.inOut'})
    svg_timeline.to('#svg-n-path', {fill: '#fff', fillOpacity: 1, attr: {"stroke-width": 2}, duration: 0.8, ease: 'power2.inOut'})

    //Playing animation
    svg_timeline.play()

    //Time out to remove loader after animation is completed
    setTimeout(() =>{

      //Obtaining loading div
      const loader = document.getElementById('loader');
      
      //Checking if it exists, and removing if it does
      if (loader) {
        
        //Removing with fade out effect after 1s
        loader.style.transition = 'opacity 1s';
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 1000); //1000
        // Enabling scrolling
        document.body.style.overflow = '';
      }
      
    }, 4000) //4000

}); 