//----------------------------------------------------------------War Robots Showcase----------------------------------------------------------------//
//-----------------------------------------------------------------------mover.js---------------------------------------------------------------//

//Registering components for moving the camera at various positions
////Component for moving the camera from the homepage to the first stage of robots
AFRAME.registerComponent("move-1",{

    //Schema
    schema:{},

    //Calling an init function
    init:function(){

        //Obtaining the start button and camera elements
        start_el=document.querySelector("#start")
        camera_el=document.querySelector("#camera")
        
        //Adding an event listener where the upon clicking on the start button, the camera moves down to stage 1
        start_el.addEventListener("click",(e)=>{

            //Setting the camera's animation attribute
            camera_el.setAttribute("animation",{property:"position",to:"0 -15 2",easing:"linear",dur:"2000",loop:"false"})
        })
        }
}),

////Component for moving the camera from the robot stage to the second stage of titans    
AFRAME.registerComponent("move-2",{
    
    //Schema
    schema:{},

    //Calling an init function    
    init:function(){

        //Obtaining the stage 1 button and camera elements
        start_2_el=document.querySelector("#start_2")
        camera_el=document.querySelector("#camera")

        //Adding an event listener where the upon clicking on the stage 1 button, the camera moves down to stage 2
        start_2_el.addEventListener("click",(e)=>{

            //Setting the camera's animation attribute
            camera_el.setAttribute("animation",{property:"position",to:"0 -30 0",easing:"linear",dur:"2000",loop:"false"})
        })
    }
}),

////Component for moving the camera from the titan stage to the homepage  
AFRAME.registerComponent("move-3",{

    //Schema
    schema:{},

    //Calling an init function
    init:function(){

        //Obtaining the stage 3 button and camera elements
        start_3_el=document.querySelector("#start_3")
        camera_el=document.querySelector("#camera")

        //Adding an event listener where the upon clicking on the stage 3 button, the camera moves back up to the home page
        start_3_el.addEventListener("click",(e)=>{

            //Setting the camera's animation attribute
            camera_el.setAttribute("animation",{property:"position",to:"0 0 0",easing:"linear",dur:"2000",loop:"false"})
        })
    }
})

////Component for moving the camera between the various stages using arrows  
AFRAME.registerComponent("move-arrow",{
    
    //Schema
    schema:{},

    //Calling a tick function
    tick:function(){

        //Obtaining the camera element
        camera_el=document.querySelector("#camera")
     
        //Sourcing thep position attribute of the camera element, and assigning a variable to its y value
        position_camera_el=camera_el.getAttribute("position")
        y=position_camera_el.y

        //Adding an event listener to induce movement to the camera based on the keys pressed
        window.addEventListener("keydown",(e)=>{

            //Assessing what the key pressed is to move the camera accordingly
            ////Case-1 -The key is the down arrow(↓)
            if(e.key==="ArrowDown"){

                //Checking the y position of the camera, when the key is pressed
                ////Case-1 -The y position is 0 
                if(y===0){
                    camera_el.setAttribute("animation",{property:"position",to:"0 -15 2",easing:"linear",dur:"2000",loop:"false"})
                }

                ////Case-2 The y position is -15
                else if(y===-15){
                    camera_el.setAttribute("animation",{property:"position",to:"0 -30 2",easing:"linear",dur:"2000",loop:"false"})
                }
            }

            ////Case-2 -The key is the up arrow(↑)
            if(e.key==="ArrowUp"){

                //Checking the y position of the camera, when the key is pressed
                ////Case-1 -The y position is -15 
                if(y===-15){
                    camera_el.setAttribute("animation",{property:"position",to:"0 0 0",easing:"linear",dur:"2000",loop:"false"})
                }

                ////Case-1 -The y position is -30
                else if(y===-30){
                    camera_el.setAttribute("animation",{property:"position",to:"0 -15 2",easing:"linear",dur:"2000",loop:"false"})
                }
            }
        })
    }
})

////Component for enabling lateral movement of the camera between various options the first stage offers
AFRAME.registerComponent("move-lateral",{

    //Schema
    schema:{},

    //Calling a tick function
    tick:function(){

    //Obtaining the camera element   
    camera_el=document.querySelector("#camera")

    //Spourcing the postion attribute of the camera element and assigning a variable to its y value
    position=camera_el.getAttribute("position",position)
    y=position.y

    //Adding an event listener to induce movement to the camera based on the keys pressed
    window.addEventListener("keydown",(e)=>{
        //Verifying whether the y position of the camera is -15 or not
        ////Case-1 -The y position is 15
        if(y===-15){

            //Deliberating on the keys pressed and their resultant actions
            ////Case-1 -The key is the left arrow(←)
            if(e.key==="ArrowLeft"){
                camera_el.setAttribute("animation",{property:"position", to:"-20 -15 2", easing:"linear",dur:"2000",loop:"false"})
            }

            ////Case-2 -The key is the right arrow(→)
            else if(e.key==="ArrowRight"){
                camera_el.setAttribute("animation",{property:"position", to:"20 -15 2", easing:"linear",dur:"2000",loop:"false"})
            }

            ////Case-3 -The key is the spacebar ()
            else if(e.keyCode===32){
                camera_el.setAttribute("animation",{property:"position", to:"0 -15 2", easing:"linear",dur:"2000",loop:"false"})
            }
        }
    })
    }
})

//-----------------------------------------------------------------------mover.js---------------------------------------------------------------//
//----------------------------------------------------------------War Robots Showcase----------------------------------------------------------------//
