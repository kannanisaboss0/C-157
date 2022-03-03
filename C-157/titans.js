//----------------------------------------------------------------War Robots Showcase----------------------------------------------------------------//
//-----------------------------------------------------------------------titans.js---------------------------------------------------------------//

//Registering a component ot display the two options of titans available 
AFRAME.registerComponent("titan-portals",{

    //Scehma
    schema:{},

    //Calling the init function
    init: function(){
        this.createPortals()
    },

    //Defining  a function that creates the portals and all the sub-elements within them
    createPortals: function(){

        //Declaring a list that contains the details of all the titans
        const titans_list=[
            {Name:"AO MING",Image:"./Images/ao_ming.jpeg",Id:"ao-ming",Number:1},
            {Name:"KID",Image:"./Images/kid.png",Id:"kid",Number:2}
        ]

        //Declaring a new variable to describes the x position
        initial_x_position=-5

        //Running a for loop over each element of the list
        for( var titan_details of titans_list){

            //Declaring a postion dictionary and incrementing the x postion by 10 for every iteration
            position={x:initial_x_position,y:-33.5,z:-7}
            initial_x_position+=10

            //Calling the functions to create border, images and the titles
            border_el=this.createBorder(position,titan_details.Id)
            title_el=this.createTitle(position,titan_details.Name,titan_details.Id)
            image_el=this.createImage(position,titan_details.Image,titan_details.Id)

            //Refering to the main element and appending the above elements as children to it
            main_el=document.querySelector("#titan-container")
            main_el.appendChild(border_el)
            main_el.appendChild(title_el)
            main_el.appendChild(image_el)  
        }
    },

    //Defining a function to create a border
    createBorder: function(pos,id){

        //Creating a new elemennt, setting its attributes and returning it
        border_el=document.createElement("a-entity")
        border_el.setAttribute("geometry",{primitive:"ring",radiusInner:2.5,radiusOuter:2.7})
        border_el.setAttribute("position",pos)
        border_el.setAttribute("id",`${id}-border`)
        return border_el

    },

    //Defining a function that creates a title
    createTitle: function(pos,name,id){

        //Creating a new element, setting its attributes and returning it
        title_el=document.createElement("a-entity")
        title_el.setAttribute("text",{font:"exo2bold",width:18.5,color:"yellow",align:"center",value:name})
        title_el.setAttribute("position",{x:pos.x,y:-37.05,z:pos.z})
        title_el.setAttribute("id",`${id}-title`)
        return title_el
    },

    //Defining a function that creates an image
    createImage: function(pos,image,id){

        //Creating a new elemennt, setting its attributes and returning it
        image_el=document.createElement("a-entity")
        image_el.setAttribute("geometry",{primitive:"circle",radius:2.45})
        image_el.setAttribute("material",{src:image})
        image_el.setAttribute("position",position)
        image_el.setAttribute("id",`${id}-image`)
        return image_el
    }
})

//-----------------------------------------------------------------------titans.js---------------------------------------------------------------//
//----------------------------------------------------------------War Robots Showcase----------------------------------------------------------------//