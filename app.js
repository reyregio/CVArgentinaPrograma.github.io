class RandomUser {
    constructor() {}
    
    static fetchFromAPI() {
        let URL = "https://randomuser.me/api/";
        fetch(URL)
        .then((response) => response.json())
        .then((data) => RandomUser.renderUserData(data))
        .catch((error) => alert(error));
    }
    
    static renderUserData(data) {
        let user = data.results[0];
        let cardElem = document.querySelector(".card");
        cardElem.innerHTML = ` <div class="card-head">
        
        <div class="user-image">
        <img src="${user.picture.large}" alt="">
        </div>
        </div>
        <div class="card-body">
        
        
        <div class="user-name">
        <span class="user-name-full">${user.name.first} ${user.name.last},</span>
        <span class="user-age">${user.dob.age}</span>
        </div>
        
        <div class="user-location-adress">
        <span>${user.location.city}, ${user.location.state}, ${user.location.country} </span>
        </div>
        </div>
        <div class="card-foot">
        <div class="user-contact-info">
        
        <span class="mail"> <i class="fas fa-envelope"> </i>  ${
            user.email
        }<button class="copy" data-clipboard-text="${
            user.email
        }"><i class="fa-regular fa-copy"></i></button></span>
        <span> <i class="fa-solid fa-mobile-button"> </i> ${
            user.cell
        } <button class="copy" data-clipboard-text="${
            user.cell
        }"><i class="fa-regular fa-copy"></i></button></span>
        </div>
        </div>`;
        
        // Add event listener to copy buttons
        const copyButtons = document.querySelectorAll(".copy");
        copyButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const textToCopy = button.dataset.clipboardText;
                navigator.clipboard.writeText(textToCopy).then(
                    () => {
                        console.log("Text copied to clipboard");
                    },
                    (err) => {
                        console.error("Could not copy text: ", err);
                    }
                    );
                });
            });
        }
    }
    
    RandomUser.fetchFromAPI();
    
    
    let copy=document.querySelectorAll(".mail");
    
    copy.forEach(text=>{
        const btnCopy = text.querySelector('.copy');
        const content = text.querySelector('span:first-child');
        
        btnCopy.addEventListener('click',() =>{
            navigator.clipboard.writeText(content.textContent)
            btnCopy.textContent = 'Copied!'
        })
    })
    
    // Add event listener to print button
    document.getElementById("print-button").addEventListener("click", function() {
        // Hide print button before printing
        this.style.display = "none";
        // Call print function
        window.print();
        // Show print button after printing
        this.style.display = "block";
    });
    