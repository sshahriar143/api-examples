const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}
const displayUser = user =>{
    const genderTag =document.getElementById('gender')
    genderTag.innerHTML= user.results[0].gender
    console.log(user.results[0].gender);
    const nameTag = document.getElementById('name')
    nameTag.innerHTML =user.results[0].name.title + ' '+ user.results[0].name.first + ' ' + user.results[0].name.last
    // console.log(user.results[0].name.first);
    const locationTag =document.getElementById('location')
    locationTag.innerHTML =user.results[0].location
    console.log(user.results[0].location);

}
loadUser()