canvas=document.getElementById('myCanvas')
ctx=canvas.getContext("2d")

car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;

car1_image="https://tse2.mm.bing.net/th?id=OIP.iH2YcmQ9aW-BWZUw1uefwQHaDk&pid=Api&P=0&w=333&h=161";
car2_image="https://www.clker.com/cliparts/A/c/g/U/y/T/blue-car-top-view-hi.png";

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log(up)
    }

    if(keyPressed=='40'){
        car1_down();
        console.log(down)
    }

    if(keyPressed=='37'){
        car1_left();
        console.log(left)
    }

    if(keyPressed=='39'){
        car1_right();
        console.log(right)
    }
}