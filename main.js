function saveToLocalStorage(event) {
    event.preventDefault();
    

    let name = event.target.name.value;
    let email = event.target.email.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);


    let userDetails = {
        name , 
        email
    }

    let userDetails_serialized = JSON.stringify(userDetails);

    localStorage.setItem("userDetail", userDetails_serialized);

}