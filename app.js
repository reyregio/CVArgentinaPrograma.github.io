class RandomUser{
    constructor(){}
    
    static fetchFromAPI(){
        let URL ='https://randomuser.me/api/';
        fetch(URL)
        .then(response =>response.json())
        .then(data => RandomUser.renderUserData(data))
        .catch(error=>alert(error));
    }
    static renderUserData(data){
        let user =data.results[0];
        let cardElem=document.querySelector('.card');
        cardElem.innerHTML=` <div class="card-head">
        
        <div class="user-image">
        <img src="${user.picture.large}" alt="">
        </div>
        </div>
        <div class="card-body">
        <div class="user-post-adress">
        <div>
        <span>${user.location.street.number}</span> <span>Numero</span>
        </div>
        <div>
        <span>${user.location.postcode}</span> <span>Código Postal</span>
        </div>
        <div>
        <span>${user.location.street.name}</span><span>Calle</span>
        </div>
        </div>
        
        <div class="user-name">
        <span class="user-name-title">${user.name.title}.</span>
        <span class="user-name-full">${user.name.first} ${user.name.last},</span>
        <span class="user-age">${user.dob.age}</span>
        </div>
        
        <div class="user-location-adress">
        <span>${user.location.city}, ${user.location.state}, ${user.location.country} </span>
        </div>
        </div>
        <div class="card-foot">
        <div class="user-contact-info">
        
        <span> <i class="fas fa-envelope"> </i> ${user.email} <button class="copy"><i class="fa-regular fa-copy"></i></button></span>
        <span> <i class="fa-solid fa-mobile-button"> </i> ${user.cell} <button class="copy"><i class="fa-regular fa-copy"></i></button></span>
        </div>
        </div>`
    }    
}

RandomUser.fetchFromAPI();

let btn =document.querySelector("button");
btn.onclick=() =>{
    window.print();
}