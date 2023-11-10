const box = document.getElementById('box');
const colors = document.querySelectorAll('#colors-container div');
const textBlocks = document.querySelectorAll('.text');

colors.forEach(color => {
  color.addEventListener('click', () => {
    const colorId = color.getAttribute('id');
    
    // hide all text blocks
    textBlocks.forEach(block => block.classList.remove('visible'));
    
    // show text blocks associated with selected color
    const visibleBlocks = document.querySelectorAll(`.text.${colorId}`);
    visibleBlocks.forEach(block => block.classList.add('visible'));
    
    // change box color
    box.style.backgroundColor = colorId;
  });
});
