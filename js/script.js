var spinnerX = document.querySelector('.spinnerX');
var pageX = document.querySelector('#pageX');

// setTimeout(() => {
//     spinnerX.style.display = 'none';
//     pageX.style.display = 'block';
// }, 2000);

window.addEventListener('load', function() {
    spinnerX.style.display = 'none';
    pageX.style.display = 'block';
    console.log('All assets are loaded')
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });