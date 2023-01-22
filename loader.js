const loading = document.querySelector('#loading')

function removeloader() {
    loading.style.display = 'none'
}

anime({
    targets: '#ourloader path',
    strokeDashoffset: [
        anime.setDashoffset, 0
    ],
    easing: 'linear',
    duration: 500,
    delay: function(el, i) {
        return i * 30
    },
    direction: 'alternate',
    loop: true
});


function loader() {
    setTimeout(removeloader, 2000)
}