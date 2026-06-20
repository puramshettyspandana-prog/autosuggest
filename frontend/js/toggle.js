var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "/image/john.png"
    },
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "/image/woman.png"
    }
]
var curId = 0;
function toggle()
{
    curId = ( curId + 1 ) % 2;
    //image
    var user = users[ curId ];
    document.getElementById( "user-img" ).src = user.image;
    //name
    document.getElementById( "user-name" ).innerText = user.name;
    //gender
    document.getElementById( "user-gender" ).innerText = user.gender;

}