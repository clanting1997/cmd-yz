console.log('hello world');

const recorderOne = document.getElementById('recorder1');
const playerOne = document.getElementById('player1');

console.log(recorderOne, playerOne);

recorderOne.addEventListener('change', function(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    // Do something with the audio file.
    playerOne.src = url;
});
