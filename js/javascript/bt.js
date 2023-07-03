var audio = document.querySelector('audio');
var music01 = document.getElementById('music01')
var music02 = document.getElementById('music02')

music01.onclick = function() {
    audio.src = "music/music1.mp3";
    audio.play()
}
music02.onclick = function() {
    audio.src = "music/music2.mp3";
    audio.play()
}
