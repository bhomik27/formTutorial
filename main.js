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
    const parentElement = document.getElementById('userDetails');
    const childElement = document.createElement('li');
    

    childElement.textContent = userDetails.name + ' - ' + userDetails.email + ' - ' + userDetails.number;
    

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    deleteButton.onclick = () => {
        localStorage.removeItem(userDetails.name)
        parentElement.removeChild(childElement)
    }

    parentElement.appendChild(childElement);
    childElement.appendChild(deleteButton);

    
}


// function deleteUserDetails(event) {
//     event.preventDefault();
//     console.log("Delete button clicked");

//     const listItem = this.parentNode;
//     const parentElement = listItem.parentNode;

//     localStorage.removeItem(userDetails.name);
//     parentElement.removeChild(listItem);

//     deleteButton.onClick = () => {
//         localStorage.removeItem(userDetails.name);
//     }

// }