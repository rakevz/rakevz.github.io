document.getElementById('competitionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstBreed = document.getElementById('firstPlace').value;
    const secondBreed = document.getElementById('secondPlace').value;
    const thirdBreed = document.getElementById('thirdPlace').value;

    const firstPrice = 1000;
    const secondPrice = 800; 
    const thirdPrice = 500;   

    document.getElementById('firstBreed').textContent = firstBreed;
    document.getElementById('secondBreed').textContent = secondBreed;
    document.getElementById('thirdBreed').textContent = thirdBreed;

    document.getElementById('firstPrice').textContent = firstPrice;
    document.getElementById('secondPrice').textContent = secondPrice;
    document.getElementById('thirdPrice').textContent = thirdPrice;
});