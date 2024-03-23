window.sr = ScrollReveal({ reset: true });

sr.reveal('#cabecalho', {duration: 1000});
sr.reveal('#', {duration: 1000});
sr.reveal('#cabecalho', {duration: 1000});


// ROLAGEM

window.addEventListener("scroll", function(){
    let header = document.querySelector('#cabecalho')
    header.classList.toggle('rolagem', window.scrollY > 1200)
})