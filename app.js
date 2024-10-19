let menuBtn=document.querySelector('.menu');
let tab=document.querySelector('.tab');
menuBtn.addEventListener('click',()=>{
    tab.classList.add('show-tab');
    overlay.classList.add('show-overlay');
});
  document.querySelector('.closeBtn').addEventListener('click', function() {
    document.querySelector('.tab').style.display = 'none';
  });
