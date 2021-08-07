const logout = async () => {
  console.log('got here');

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  console.log('response', response);

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

// document.querySelector('#logout').addEventListener('click', logout);

document.getElementById('logout').addEventListener('click', logout);
