//alert( "JS is loading" );
//console.log( "Hello from JS!" );
let isMale = true;

function toggleCard()
{
    const img = document.querySelector( "img" );
    const name = document.querySelector( "h2" );
    const gender = document.querySelector( "p" );

    if ( isMale ) {
        img.src = "../image/woman.png"; // female image
        name.textContent = "Spandana";
        gender.textContent = "Female";
    } else {
        img.src = "../image/john.png";// male image
        name.textContent = "John";
        gender.textContent = "Male";
    }

    isMale = !isMale;
}