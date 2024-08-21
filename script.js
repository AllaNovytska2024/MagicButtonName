document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    fetch(`https://api.genderize.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            if (data.gender) {
                resultDiv.textContent = `Имя: ${data.name}, Пол: ${data.gender}, Вероятность: ${data.probability}`;
            } else {
                resultDiv.textContent = 'Пол не определен для этого имени.';
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
});


