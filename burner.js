lens.addEventListener('mouseover', function() {
      hiddenText.style.display = 'block';
    });

lens.addEventListener('mouseout', function() {
      hiddenText.style.display = 'none';
    });

 hiddenText.addEventListener('mouseover', function(event) {
      hiddenText.style.display = 'block';
    });

hiddenText.addEventListener('mouseout', function(event) {
      hiddenText.style.display = 'none';
    });

hiddenText.addEventListener('mousemove', function(event) {
  const textRect = hiddenText.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const textLeft = textRect.left + window.pageXOffset;
  const textTop = textRect.top + window.pageYOffset;

  if (mouseX >= textLeft && mouseX <= (textLeft + textRect.width) && mouseY >= textTop && mouseY <= (textTop + textRect.height)) {
    hiddenText.style.display = 'block';
  } else {
    hiddenText.style.display = 'none';
  }
});

----------------------

const lens = document.querySelector('.lens');
const hiddenText = document.querySelector('.hiddenText');

lens.addEventListener('mouseover', function() {
  const lensColor = window.getComputedStyle(lens).getPropertyValue('background-color');
  
  if (lensColor === '#FFBC80') {
    hiddenText.classList.remove('visible-orange1');
  } else if (lensColor === 'green') {
    hiddenText.classList.remove('visible-green');
  } else {
    hiddenText.classList.remove('visible');
  }
});

lens.addEventListener('mouseout', function() {
  hiddenText.classList.add('visible');
});

hiddenText.addEventListener('mouseover', function(event) {
  const lensColor = window.getComputedStyle(lens).getPropertyValue('background-color');
  
  if (lensColor === 'red') {
    hiddenText.classList.add('visible-red');
  } else if (lensColor === 'green') {
    hiddenText.classList.add('visible-green');
  } else {
    hiddenText.classList.add('visible');
  }
});

hiddenText.addEventListener('mouseout', function(event) {
  hiddenText.classList.remove('visible', 'visible-red', 'visible-green');
});

hiddenText.addEventListener('mousemove', function(event) {
  const textRect = hiddenText.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const textLeft = textRect.left + window.pageXOffset;
  const textTop = textRect.top + window.pageYOffset;

  if (mouseX >= textLeft && mouseX <= (textLeft + textRect.width) && mouseY >= textTop && mouseY <= (textTop + textRect.height)) {
    const lensColor = window.getComputedStyle(lens).getPropertyValue('background-color');
    
    if (lensColor === 'red') {
      hiddenText.classList.add('visible-red');
    } else if (lensColor === 'green') {
      hiddenText.classList.add('visible-green');
    } else {
      hiddenText.classList.add('visible');
    }
  } else {
    hiddenText.classList.remove('visible', 'visible-red', 'visible-green');
  }
});
