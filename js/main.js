function init()
{

    var element = document.getElementById( 'myCanvas' );
    canvas = element.getContext( '2d' );

    var image = new Image();
    image.src = "pictures/0.jpeg";

    image.addEventListener( 'load' , modifyImage , false );

}

function modifyImage( e )
{

    image = e.target;

    var pattern = canvas.createPattern( image , 'repeat-x' );

    canvas.fillStyle = pattern;

    canvas.fillRect( 0 , 0 , 1200 , 1300 );

}

window.addEventListener( 'load' , init , false );