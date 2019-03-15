
/* Arrays that you are going to append attributes to (such as '.element' cannot be strings, they must be objects*/

var images = [
    {
        path: "Images/bulbasaur.png"
    },
    {
        path: "Images/charmander.png"
    },
    {
        path: "Images/squirtle.png"
    }
];

/*
pokemon = document.createElement('img');
pokemon.style.width = '150px';
document.querySelector('#choices').appendChild(pokemon);
pokemon.src=images;
*/

images.forEach(function(image, index) 
{
    image.element = document.createElement('img');
    image.src = images[index].path;
    image.style.width = '150px';
    document.querySelector('#choices').appendChild(image.element);
    
});
    
