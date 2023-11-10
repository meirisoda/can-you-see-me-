const lens = document.getElementById('lens');
const lensWidth = lens.offsetWidth;
const lensHeight = lens.offsetHeight;
const hiddenText = document.getElementById('hidden-text');
const colors = document.querySelectorAll('.color-option');

document.addEventListener('mousemove', e => {
  const x = e.clientX - (lensWidth / 2);
  const y = e.clientY - (lensHeight / 2);
  lens.style.left = x + 'px';
  lens.style.top = y + 'px';
});

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

  if (mouseX >= textRect.left && mouseX <= textRect.right &&
      mouseY >= textRect.top && mouseY <= textRect.bottom) {
    hiddenText.style.display = 'block';
  } else {
    hiddenText.style.display = 'none';
  }
});


const pink1 = document.getElementById('pink1');
const orange2 = document.getElementById('orange2');
const red3 = document.getElementById('red3');
const blue4 = document.getElementById('blue4');
const yellow5 = document.getElementById('yellow5');
const black6 = document.getElementById('black6');
const grey7 = document.getElementById('grey7');
const green8 = document.getElementById('green8');
const white9 = document.getElementById('white9');

const orange = document.getElementById('hidden-orange2');

pink1.addEventListener('click', function() {
  lens.style.backgroundColor = '#F6B4B3';
  document.body.style.backgroundColor = 'white';
  orange.classList.remove('visible');
});

orange2.addEventListener('click', function() {
  lens.style.backgroundColor = '#FFBC80';
  document.body.style.backgroundColor = '#FFDDDE';
  textOrange.body.style.color = 'black';
  orange.classList.remove('visible');
});

red3.addEventListener('click', function() {
  lens.style.backgroundColor = '#EE2416';
  document.body.style.backgroundColor = '#FFD29B';
});

blue4.addEventListener('click', function() {
  lens.style.backgroundColor = '#2C4BE6';
  document.body.style.backgroundColor = '#848840';
});

yellow5.addEventListener('click', function() {
  lens.style.backgroundColor = '#FFEE57';
  document.body.style.backgroundColor = '#E4FEB2';
});

black6.addEventListener('click', function() {
  lens.style.backgroundColor = '#000000';
  document.body.style.backgroundColor = '#561218';
});

grey7.addEventListener('click', function() {
  lens.style.backgroundColor = '##CFCFCF';
  document.body.style.backgroundColor = 'black';
});

green8.addEventListener('click', function() {
  lens.style.backgroundColor = '#66D845';
  document.body.style.backgroundColor = '#FFD1A8';
});

white9.addEventListener('click', function() {
  lens.style.backgroundColor = 'white';
  document.body.style.backgroundColor = 'black';
});


