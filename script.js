const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count')
const total = document.getElementById('total')
const selectMovie = document.getElementById('movie');
let ticketPrice = +selectMovie.value;

const updateSelectedCount = function () {
    const selectSeat = document.querySelectorAll('.row .seat.selected');
    const selectSeatCount = selectSeat.length
    count.innerText = selectSeatCount;
    total.innerText = selectSeatCount * ticketPrice;
}

selectMovie.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})
