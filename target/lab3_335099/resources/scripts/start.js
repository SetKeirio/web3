$(function () {
    const REFRESH = 7000; //milliseconds

    function loadDateTime(now){
        let nowSeconds, nowMinutes, nowHours;
        let day, month, year;
        year = now.getFullYear();
        month = now.getMonth();
        month += 1;
        day = now.getDate();
        if (day <= 9){
            day = "0" + day;
        }
        if (month <= 9){
            month = "0" + month;
        }
        $('#date').html(`${day}.${month}.${year}`);

        nowHours = now.getHours();
        nowMinutes = now.getMinutes();
        nowSeconds = now.getSeconds();
        if (nowHours <= 9){
            nowHours = "0" + nowHours;
        }
        if (nowMinutes <= 9){
            nowMinutes = "0" + nowMinutes;
        }
        if (nowSeconds <= 9){
            nowSeconds = "0" + nowSeconds;
        }
        $('#time').html(`${nowHours}:${nowMinutes}:${nowSeconds}`);
    }

    function setup() {
        let now = new Date();
        loadDateTime(now);
    }
    setup();
    setInterval(setup, REFRESH);
});