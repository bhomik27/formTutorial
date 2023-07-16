function saveToLocalStorage(event) {
    event.preventDefault();
    

    let name = event.target.name.value;
    let email = event.target.email.value;
    let number = event.target.number.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);


    let userDetails = {
        name ,
        email,
        number
    }

    // let userDetails_serialized = JSON.stringify(userDetails);

    localStorage.setItem(name, JSON.stringify(userDetails));

    printUserDetails(userDetails);
}

function printUserDetails(userDetails){
    const parentElement = document.getElementById('users');
    const childElement = document.createElement('li');
    childElement.textContent = userDetails.name + ' - ' + userDetails.email + ' - ' + userDetails.number;
    parentElement.appendChild(childElement);
}