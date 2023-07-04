var audio = document.querySelector('audio');
var music01 = document.getElementById('music01')
var music02 = document.getElementById('music02')
var name = document.getElementById('name')

music01.onclick = function() {
    audio.src = "music/music1.mp3";
    document.getElementById('name').textContent = "コネクト"
    audio.play()
}
music02.onclick = function() {
    audio.src = "music/music2.mp3";
    document.getElementById('name').textContent = "secret base ~君がくれたもの~"
    audio.play()
}
