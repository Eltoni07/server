document.getElementById('redirectButton').addEventListener('click', function() {
  const inputValue = document.getElementById('serverInput').value;
  if (inputValue) {
    const targetURL = `http://192.168.0.${inputValue}:8080`;
    window.open(targetURL, '_blank');
    checkServerConnection(targetURL);
  } else {
    document.getElementById('statusMessage').innerText = "Kodi invalid, Vendos kodin perseri";
    document.getElementById('resetButton').style.display = "none";
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('statusMessage').innerText = "Vendos Kodin:";
  document.getElementById('serverInput').value = "";
  document.getElementById('resetButton').style.display = "none";
  document.getElementById('advancedSettings').style.display = "none";
});

document.getElementById('advancedRedirectButton').addEventListener('click', function() {
  const mainPort = document.getElementById('mainPortInput').value;
  const secondaryPort = document.getElementById('secondaryPortInput').value;

  if (mainPort && secondaryPort) {
    const targetURL = `http://192.168.0.${secondaryPort}:${mainPort}`;
    window.open(targetURL, '_blank');
    checkServerConnection(targetURL);
  }
});

document.getElementById('resetButton').addEventListener('click', function() {
  document.getElementById('advancedSettings').style.display = "flex";
});

document.getElementById('serverInput').addEventListener('input', function() {
  const inputValue = document.getElementById('serverInput').value;
  if (inputValue === '121212') {
    document.getElementById('resetButton').style.display = "block";
  } else {
    document.getElementById('resetButton').style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var publicServerButton = document.getElementById('publicServerButton');

  publicServerButton.addEventListener('click', function() {
    window.location.href = 'public/index.html';
  });
});
