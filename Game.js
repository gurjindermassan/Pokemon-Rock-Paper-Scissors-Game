
var choicesElement = document.querySelector('#choices');
var resultElement = document.querySelector('#result');
var refresh = document.querySelector('#replay');

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

function displayResult(imagesIndex) {
    choicesElement.style.display = 'none'; 
    resultElement.style.display = 'block';
    
    computerChoice = Math.floor(Math.random() * 3);
    
    var userImg = document.createElement('img');
    userImg.src = images[imagesIndex].path;
    userImg.style.width = '150px';
    resultElement.appendChild(userImg);
    
    var vsImg = document.createElement('img');
    vsImg.src = 'Images/vsImage.png';
    vsImg.style.width = '100px';
    resultElement.appendChild(vsImg);
    
    var computerImg = document.createElement('img');
    computerImg.src = images[computerChoice].path;
    computerImg.style.width = '150px';
    resultElement.appendChild(computerImg);
}
    
refresh.addEventListener("click", function(){        //code to refresh the page to restart the game
    window.location.reload();
});