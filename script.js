/* script.js */
document.getElementById('view-pdfs').addEventListener('click', function(e){
e.preventDefault();
document.getElementById('pdfs').scrollIntoView({behavior:'smooth', block:'start'});
});


document.getElementById('email-me').addEventListener('click', function(e){
e.preventDefault();
window.location.href = 'mailto:your.name@example.com?subject=Hi';
});


document.addEventListener('keydown', function(e){
if(e.key === 'Tab') document.body.classList.add('show-focus');
});


(function personalize(){
const params = new URLSearchParams(location.search);
const name = params.get('name');
if(name){
const initials = name.split(/\s+/).map(s=>s[0]||'').slice(0,2).join('').toUpperCase();
document.getElementById('name').textContent = name;
document.querySelector('.initial').textContent = initials;
document.title = name + ' — Personal Page';
}
})();
