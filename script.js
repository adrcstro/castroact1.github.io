  const username = 'andre';
    const password = 'castro';

      function checkCredentials() {
        const inputUsername = document.getElementById('username').value;
        const inputPassword = document.getElementById('password').value;
        if (inputUsername === username && inputPassword === password) {
          alert('Credentials accepted. You may proceed.');
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }