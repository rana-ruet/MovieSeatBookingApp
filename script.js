const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count')
const total = document.getElementById('total')
const selectMovie = document.getElementById('movie');
let ticketPrice = +selectMovie.value;

const updateSelectedCount = function () {
    const selectSeat = document.querySelectorAll('.row .seat.selected');
    const selectSeatCount = selectSeat.length;

    // Local storage
    const seatIndex = [...selectSeat].map(seat => [...seats].indexOf(seat))
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

    count.innerText = selectSeatCount;
    total.innerText = selectSeatCount * ticketPrice;
}

const setMovieData = function (movieIn, ticketPrice) {
    localStorage.setItem("Movie Index", movieIn);
    localStorage.setItem('Movie Ticket Price', ticketPrice);
}
selectMovie.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
    const movie = e.target.selectedIndex;
    setMovieData(movie, ticketPrice);
})

container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
        updateSelectedCount();
    }
})
