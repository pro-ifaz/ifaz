let theme = localStorage.getItem('theme')
let themeDots = document.getElementsByClassName('theme-dot');
if(theme == null){
    setTheme('purple');
}
else{
    setTheme(theme)
}

for (var i=0; themeDots.length >i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
}



function setTheme(mode){
if (mode == 'purple'){
    document.getElementById('theme-style').href = 'default.css'
}
if (mode == 'blue'){
    document.getElementById('theme-style').href = 'blue.css'
}
if (mode == 'green'){
    document.getElementById('theme-style').href = 'green.css'
}

localStorage.setItem('theme', mode)
}


//contact button 

const button = document.querySelector('#contact-button');


button.addEventListener('click', () => {

const tab = window.open('https://wa.me/+8801608915187', '_blank');

});
