const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('div.img-area');

const buttons = document.getElementsByClassName("change-status");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function() {
        const friendId = button.getAttribute("data-friend-id");

        const currentStatus = button.innerText;

        let newStatus;
        if (currentStatus === "add a friend") {
            newStatus = "cancel a request";
            button.innerText = "cancel a request";
        } else if (currentStatus === "remove friend") {
            newStatus = "add a friend";
            button.innerText = "add a friend";
        } else if (currentStatus === "cancel a request") {
            newStatus = "add a friend";
            button.innerText = "add a friend";
        } else if (currentStatus === "accept a request") {
            newStatus = "remove friend";
            button.innerText = "remove friend";
        }

        fetch("/changeFriendStatus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                friendId: friendId,
                newStatus: newStatus
            })
        })
        .catch(error => {
            console.error("Ошибка при изменении статуса друга:", error);
            button.innerText = currentStatus;
        });
    });
}

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	const reader = new FileReader();
	reader.onload = ()=> {
		const allImg = imgArea.querySelectorAll('div.img-area');
		allImg.forEach(item=> item.remove());
		const imgUrl = reader.result;
		const img = document.createElement('img');
		img.src = imgUrl;
		imgArea.appendChild(img);
		imgArea.classList.add('active');
		imgArea.dataset.img = image.name;
	}
		reader.readAsDataURL(image);
})
function myFunction() { 
    var x = document.getElementById("password");
    var y;
    if(document.getElementById("password2")){
        y = document.getElementById("password2");
    }
         if (x.type === "password") {
            x.type = "text";
            if(document.getElementById("password2")){
                y.type = "text";
            }
           
        } 
     else {      
         x.type = "password"; 
         if(document.getElementById("password2")){
            y.type = "password"; 
            }     
        }      
}

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });

  const form = document.querySelector('.form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const formJSON = Object.fromEntries(data.entries());

    console.log(JSON.stringify(formJSON, null, 2));
} 

const formInf = document.getElementById('form');
const userName = document.getElementById('name');
const surname = document.getElementById('surname');
const city = document.getElementById('city');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const email = document.getElementById('email');
const sex = document.getElementById('sex');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get values
    const userNameValue = userName.value.trim();
    const userSurnameValue = surname.value.trim();
    const userPhoneValue = phone.value.trim();
    const userPasswordValue = password.value.trim();
    const userPassword2Value = password2.value.trim();
    const userEmailValue = email.value.trim();

    if(userNameValue === ""){
        setErrorFor(userName, 'Username cannnot be blank');
    }else{
        setSuccessFor(userName);
    }
    if(userSurnameValue === ""){
        setErrorFor(surname, 'Surname cannnot be blank');
    }else{
        setSuccessFor(surname);
    }
    if(userPhoneValue === ""){
        setErrorFor(phone, 'Phone cannnot be blank');
    }else{
        setSuccessFor(phone);
    }
    if(userPasswordValue === ""){
        setErrorFor(password, 'Password cannnot be blank');
    }else{
        setSuccessFor(password);
    }
    if(userPassword2Value === ""){
        setErrorFor(password2, 'Repeat your password again');
    }else if(userPasswordValue !== userPassword2Value){
        setErrorFor(password2, 'Passwords do not match');
    }else{
        setSuccessFor(password2);
    }
    if(userEmailValue === ""){
        setErrorFor(email, 'Email cannnot be blank');
    }else{
        setSuccessFor(email);
    }
    
}


function setErrorFor(input, message){
    const formControl = input.parentElement; //.form__group
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form__group error';
}
function setSuccessFor(input){
    const formControl = input.parentElement; //.form__group
    formControl.className = 'form__group success';
}


