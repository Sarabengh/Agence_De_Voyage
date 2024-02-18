// var imageContry= document.getElementById("image")
// var select = document.getElementById("dest")
// var selectedCountry=select.value

function updateCountryImg(){
var imageContry= document.getElementById("image")
var select = document.getElementById("dest")
var selectedCountry=select.value
    switch (selectedCountry) {
        case 'France':
            imageUrl = 'Images/france.jpg';
            break;
          case 'Canada':
            imageUrl = 'Images/canada.jpg';
            break;
            case 'Maldives':
            imageUrl = 'images/maldives.jpg';
            break;
            case 'tunisia':
            imageUrl = 'Images/tunisia.jpg';
            break;
    }
    imageContry.src = imageUrl ;

}