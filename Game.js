
var choicesElement = document.querySelector('#choices');
var resultElement = document.querySelector('#result');

/* Arrays that you are going to append attributes to (such as '.element') cannot be strings, they must be objects*/
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

images.forEach(function(pokemon, index) 
{
    pokemon.element = document.createElement('img');
    pokemon.element.src = pokemon.path;
    pokemon.element.style.width = '150px';
    document.querySelector('#choices').appendChild(pokemon.element);
    pokemon.element.addEventListener('click',function() {
        displayResult(index);
    });
    
});

function displayResult(userChoice) {
    choicesElement.style.display = 'none'; 
    resultElement.style.display = 'block';
    
    var userImg = document.createElement('img');
    userImg.src = images[userChoice].path;
    userImg.style.width = '150px';
    resultElement.appendChild(userImg);
    
    
}
    
