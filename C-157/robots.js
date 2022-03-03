//----------------------------------------------------------------War Robots Showcase----------------------------------------------------------------//
//-----------------------------------------------------------------------robots.js---------------------------------------------------------------//

//Registering a component ot display the various options of robots available 
AFRAME.registerComponent("robot-portals",{

    //Schema
    schema:{},

    //Calling the init function
    init:function(){
        this.createPortals()
    },

    //Defining  a function that creates the portals and all the sub-elements within them
    createPortals:function(){

        //Declaring a list that contains the details of all the robots
        const robots_list=[
            {Name:"AO JUN",Image:"./Images/ao_jun.jpeg",Id:"ao_jun",Number:1},
            {Name:"ARES",Image:"./Images/ares.jpeg",Id:"ares",Number:2},
            {Name:"BOA",Image:"./Images/boa.jpeg",Id:"boa",Number:3},
            {Name:"BULGASARI",Image:"./Images/bulgasari.jpeg",Id:"bulgasari",Number:4},
            {Name:"RAVANA",Image:"./Images/ravana.jpeg",Id:"ravana",Number:5},
            {Name:"SPECTRE",Image:"./Images/spectre.jpeg",Id:"spectre",Number:6}
        ]

        //Declaring a new variable to describes the x position
        initial_x_position=-25

        //Running a for loop over each element of the list
        for(var robot_details of robots_list){

            //Declaring a postion dictionary and incrementing the x postion by 10 for every iteration
            position={x:initial_x_position,y:-19,z:-7} 
            initial_x_position+=10

            //Calling the functions to create border, images and the titles
            border_el=this.createBorder(position,robot_details.Id)
            title_el=this.createTitle(position,robot_details.Name,robot_details.Id)
            image_el=this.createImage(position,robot_details.Image,robot_details.Id)
            
            //Refering to the main element and appending the above elements as children to it
            main_el=document.querySelector("#robot-container")
            main_el.appendChild(border_el)
            main_el.appendChild(title_el)
            main_el.appendChild(image_el)
        }
    },

       //Defining a function to create a border 
       createBorder:function(pos,id){

            //Creating a new elemennt, setting its attributes and returning it
            border_el=document.createElement("a-entity")
            border_el.setAttribute("geometry",{primitive:"ring",radiusInner:2.5, radiusOuter:2.7})
            border_el.setAttribute("position",pos)
            border_el.setAttribute("id",`${id}-border`)
            return border_el
        },

        //Defining a function that creates a title
        createTitle:function(pos,name,id){

            //Creating a new element, setting its attributes and returning it
            title_el=document.createElement("a-entity")
            title_el.setAttribute("text",{font:"exo2bold",color:"yellow",align:"center",width:18.5,value:name})
            title_el.setAttribute("position",{x:pos.x,y:-22.05,z:-7})
            title_el.setAttribute("id",`${id}-title`)
            return title_el
        },

        //Defining a function that creates an image
        createImage:function(pos,image,id){

            //Creating a new elemennt, setting its attributes and returning it
            image_el=document.createElement("a-entity")
            image_el.setAttribute("geometry",{primitive:"circle",radius:2.45})
            image_el.setAttribute("position",pos)
            image_el.setAttribute("material",{src:image})
            image_el.setAttribute("id",`${id}-image`)
            return image_el
        }   
})

//-----------------------------------------------------------------------robots.js---------------------------------------------------------------//
//----------------------------------------------------------------War Robots Showcase----------------------------------------------------------------//

