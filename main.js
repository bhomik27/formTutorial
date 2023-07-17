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
    deleteButton.style.fontWeight = 'bold';
    deleteButton.onclick = () => {
        localStorage.removeItem(userDetails.name)
        parentElement.removeChild(childElement)
    };

    const editButton = document.createElement('input');
  editButton.type = 'button';
  editButton.value = 'Edit';
  editButton.style.fontWeight = 'bold';
  editButton.onclick = () => {
    document.getElementById('name').value = userDetails.name;
    document.getElementById('email').value = userDetails.email;
    document.getElementById('number').value = userDetails.number;
  };

    
    parentElement.appendChild(childElement);
    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    
}

