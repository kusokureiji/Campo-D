let tulipanIndex = 1;

document.addEventListener('click', function() {
    if (tulipanIndex <= 10) {
        const tulipan = document.getElementById('tulipan' + tulipanIndex);
        tulipan.style.display = 'block';
        tulipan.style.left = (Math.random() * 80 + 10) + '%';
        tulipanIndex++;
    }

    if (tulipanIndex > 10) {
        for (let i = 1; i <= 10; i++) {
            const tulipan = document.getElementById('tulipan' + i);
            tulipan.style.left = (i - 1) * 10 + '%';
        }

        document.getElementById('mensajeFinal').style.display = 'block';
        document.getElementById('audio').play();
    }
});