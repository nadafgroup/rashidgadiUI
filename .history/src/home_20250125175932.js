 // Function to handle the button click event
 function openBed() {
   window.location.href = 'bed.html';
 }

 function openPillow() {
   window.location.href = 'pillow.html';
 }

 function openSofa() {
   window.location.href = 'sofa.html';
 }

 
 function openRepair() {
   window.location.href = 'repair.html';
 }

 function openRent() {
   window.location.href = 'rent.html';
 }

 function openFurniture() {
  window.location.href = 'furniture.html';
}


const languageSelect = document.getElementById('language-select');
const contents = document.querySelectorAll('.content');

languageSelect.addEventListener('change', () => {
  const selectedLanguage = languageSelect.value;
  contents.forEach(content => {
    content.classList.remove('active');
    if (content.id === `content-${selectedLanguage}`) {
      content.classList.add('active');
    }
  });
});


