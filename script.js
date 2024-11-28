var form = document.getElementById('form');
var searchUser = document.getElementById('searchUser');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var userId = document.getElementById('userId').value.trim();
    var fName = document.getElementById('fName').value.trim();
    var lName = document.getElementById('lName').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var age = document.getElementById('age').value.trim();

    if (!userId || !fName || !lName || !phone || !email || !age) {
        alert('Please fill in all the fields before adding a user.');
        return;
    }

    var userArray = JSON.parse(localStorage.getItem('userData')) || [];

    if (userArray.some(user => user.userId === +userId)) {
        alert('User ID already exists. Please use a unique User ID.');
        return;
    }
    if (userArray.some(user => user.phone === phone)) {
        alert('Phone already exists. Please use a unique Phone.');
        return;
    }
    if (userArray.some(user => user.email === email)) {
        alert('Email already exists. Please use a unique Email.');
        return;
    }

    var userData = {
        userId: +userId,
        fName : fName,
        lName : lName,
        phone : phone,
        email : email,
        age: +age,
    };

    userArray.push(userData);
    localStorage.setItem('userData', JSON.stringify(userArray));

    alert('User added successfully!');
    form.reset();
});


searchUser.addEventListener('click', () => {
    var searchId = +document.getElementById('searchId').value;
    var userArray = JSON.parse(localStorage.getItem('userData')) || [];

    var user = userArray.find(user => user.userId === searchId);

    if (user) {
        document.querySelector('.id').innerHTML = user.userId;
        document.querySelector('.fName').innerHTML = user.fName;
        document.querySelector('.lName').innerHTML = user.lName;
        document.querySelector('.phone').innerHTML = user.phone;
        document.querySelector('.email').innerHTML = user.email;
        document.querySelector('.age').innerHTML = user.age;
    } else {
        alert('User not found!');
    }
});
