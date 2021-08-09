const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#user-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
      return;
    } else {
      alert('Failed to log in');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const password2 = document.querySelector('#password-signup2').value.trim();
  let gender;
  let avatar;
  let randomizer = Math.floor(Math.random()*2)
  if (randomizer === '0') {
    gender = 'male';
    avatar =
      'https://static.wikia.nocookie.net/pokemon/images/5/57/Red_FireRed_and_LeafGreen.png';
  } else {
    gender = 'female';
    avatar =
      'https://static.wikia.nocookie.net/pokemon/images/0/01/Green_FireRed_and_LeafGreen.png';
  }

  if (password !== password2) {
    alert('Passwords must match');
    return;
  }

  if (username && password && password2 && gender && avatar) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password, gender, avatar }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Problem with making a new account');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
