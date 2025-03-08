document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the value of the 'count' cookie
  let count = getCookie('count');

  // Check if the 'count' cookie exists
  if (count) {
    // If the cookie exists, increment its value
    count = parseInt(count) + 1;
    setCookie('count', count, 7); // Update the cookie with the new value
  } else {
    // If the cookie does not exist, create it with an initial value of 1
    count = 1;
    setCookie('count', count, 7); // Set the cookie with an expiry of 7 days
  }

  // Display the count on the webpage
  let countDisplay = document.createElement('div');
  countDisplay.textContent = `Page visited ${count} times.`;
  document.body.appendChild(countDisplay);
});
