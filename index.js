console.log("Using AFrame", AFRAME.version);
console.log("Using ZapparAFrame", ZapparAFrame);

window.addEventListener("load", setup);

function setup() {

    const myImageGroup = document.getElementById("image-group");
    const splatSnd = document.querySelector('#splat')
       const portal = document.querySelector('#portal')
  
          const   ball = document.querySelector('#ball')
          
    let imageVisible = false;

    myImageGroup.addEventListener("zappar-visible", () => {
        // The image has appeared so show the group
        myImageGroup.setAttribute("visible", "true");
        imageVisible = true;
        splatSnd.components.sound.playSound()
        
          setTimeout(() => {
          portal.setAttribute('animation__scaleIn', {
            property: 'radius-inner',
            dur: 1500,
            from: '0.001',
            to: '0.375',
            easing: 'easeOutElastic',
          })
        }, 200)

        // ball animation
        setTimeout(() => {
        // splatSnd.playSound()
          ball.setAttribute('animation__moveOut', {
          // model.setAttribute('animation__moveOut', {
            property: 'position',
            dur: 3000,
            from: '0 0 -10',
            to: '0 -0.2 0.6',
            easing: 'easeOutQuad',
          })
  }, 1000)
       
    });

    myImageGroup.addEventListener("zappar-notvisible", () => {
        // The image has disappeared so hide the group after a short delay
        imageVisible = false;
        setTimeout(() => {
            if (imageVisible === false) myImageGroup.setAttribute("visible", "false");
             splatSnd.components.sound.stopSound()
        }, 500)
    });

}
