var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

  for (let i = 1; i <= 5; i++) {
    // create new image for each image in folder
    var newImage = document.createElement('img');
    
    var imgSrc = "images/pic" + i + ".jpg";
    // Set image source file
    newImage.setAttribute('src', imgSrc);
    // Add image to the thumbbar div
    thumbBar.appendChild(newImage);

    // Add event handler to set the main image to the one clicked
    newImage.onclick = e => {
      var source = e.target.getAttribute('src');
      setDisplay(source);
    };
  }

  function setDisplay(source) {
    displayedImage.setAttribute('src', source);
  }

  /* Wiring up the Darken/Lighten button */

    btn.onclick = e => {
      currentClass = e.target.getAttribute('class');
      if (currentClass === 'dark') {
        e.target.setAttribute('class', 'light');
        e.target.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      } else {
        e.target.setAttribute('class', 'dark');
        e.target.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      }
    }
