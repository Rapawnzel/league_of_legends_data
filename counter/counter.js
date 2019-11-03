function getCounter() {
    const end = moment().endOf('day');
    setInterval(function () {
        const timeLeft = moment(end.diff(moment())).utc(); // get difference between now and timestamp
        const formatted = timeLeft.format('HH:mm:ss'); // make pretty
        $("#counterContainer").html(formatted); // or do your jQuery stuff here
    }, 1000);
}
$(window).ready(()=>{getCounter()})