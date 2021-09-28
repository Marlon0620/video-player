const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)


function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('click');
}
function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('click');
}
$backward.addEventListener('click', handlebackward)

function handlebackward() {
    $video.currentTime = $video.currentTime - 10
    console.log('atras', $video.currentTime);
}

$forward.addEventListener('click', handleforward)

function handleforward() {
    $video.currentTime = $video.currentTime + 10
    console.log('para adelante 10s', $video.currentTime);
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleloaded)
$video.addEventListener('timeupdate', handletimeupdate)

function handleloaded() {
    $progress.max = $video.duration
    console.log('reproducir video', $video.duration)
}
function handletimeupdate() {
    $progress.value = $video.currentTime
    //console.log('time', $video.currentTime)//
}
$progress.addEventListener('input', handleinput)
function handleinput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}
