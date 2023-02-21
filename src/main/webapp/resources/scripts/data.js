window.onload = function() {
    let paint = $(".canvas");
    function drawMiss(x, y){
        //clearPaint();
        if (x > paint.width() || x < -paint.width() || y > paint.height() || y < -paint.height()) {
        }
        else{
            let l = paint[0].getContext('2d');
            l.setLineDash([1.5, 1.5]);
            l.beginPath();
            l.moveTo(x, 175);
            l.lineTo(x, y);
            l.moveTo(176, y);
            l.lineTo(x, y);
            l.stroke();
            l.fillStyle = "#ff0000";
            l.arc(x, y, 2, 0, 2 * Math.PI);
            l.fill();
        }
    }

    function draw(x, y){
        //clearPaint();
        if (x > paint.width() || x < -paint.width() || y > paint.height() || y < -paint.height()) {
        }
        else{
            let l = paint[0].getContext('2d');
            l.setLineDash([1.5, 1.5]);
            l.beginPath();
            l.moveTo(x, 175);
            l.lineTo(x, y);
            l.moveTo(176, y);
            l.lineTo(x, y);
            l.stroke();
            l.fillStyle = "#00ff00";
            l.arc(x, y, 2, 0, 2 * Math.PI);
            l.fill();
        }
    }

    function redraw(x, y){
        let radius = $(".form-variable-text-r").val().replace(",", ".");
        $('#paint-status').text(" x = " + x + "; y = " + y  + " (x; y;) = (" + (x / radius * 70 * 2 + 175) + "; " + -(y / radius * 70 * 2 - 176) + ")");
        let data = (x >= 0 && y <= 0 && y >= 2*x - radius) || (x <= 0 && y <= 0 && x >= -radius && y >= -radius/2) || (x >= 0 && y >= 0 && Math.sqrt(x*x + y*y) <= radius/2);
        if (data) {
            draw(x / radius * 70 * 2 + 175, -(y / radius * 70 * 2 - 176));
        }
        else{
            drawMiss(x / radius * 70 * 2 + 175, -(y / radius * 70 * 2 - 176));
        }
    }

    let rValues = document.getElementsByClassName("table-r-value");
    if (rValues.length > 0) {
        $(".form-variable-text-r").innerHTML = rValues.item(rValues.length - 1).innerHTML;
        let xValues = document.getElementsByClassName("table-x-value");
        let yValues = document.getElementsByClassName("table-y-value");
        for (let i = 0; i < xValues.length; i++) {
            redraw(xValues.item(i).innerHTML, yValues.item(i).innerHTML);
        }
    }
}

$(function(){
    let paint = $(".canvas");
    let xval;

    function checkR(){
        let input = $(".form-variable-text-r");
        let y = input.val();
        y = y.replace(",", ".");
        if (isNumber(y) && y <= 5 && y >= 2){
            $('#r-status').text("");
            return true;
        }
        else{
            $('#r-status').text("Проверьте правильность переменной R (2 <= R <= 5)");
            return false;
        }
    }

    function checkX(){
        let values = [document.getElementById("x-button1").checked, document.getElementById("x-button2").checked, document.getElementById("x-button3").checked,
            document.getElementById("x-button4").checked, document.getElementById("x-button5").checked, document.getElementById("x-button6").checked,
            document.getElementById("x-button7").checked, document.getElementById("x-button8").checked, document.getElementById("x-button9").checked];
        let count = 0;
        values.forEach(element => element == true ? count = count + 1 : count = count);
        if (count >= 1){
            $('#x-status').text("");
            return true;
        }
        else{
            $('#x-status').text("Должно быть выбрано ровно одно значение переменной X");
            return false;
        }
    }

    function checkY(){
        let input = $(".form-variable-text-y");
        let y = input.val();
        y = y.replace(",", ".");
        if (isNumber(y) && y <= 5 && y >= -3){
            $('#y-status').text("");
            return true;
        }
        else{
            $('#y-status').text("Проверьте правильность переменной Y (-3 <= Y <= 5)");
            return false;
        }
    }

    function validate(){
        x = checkX();
        y = checkY();
        r = checkR();
        return x && y && r;
    }

    function isNumber(a){
        return isFinite(a) && !isNaN(parseFloat(a));
    }

    function clearPaint(){
        paint[0].getContext('2d').clearRect(0, 0, paint.width(), paint.height());
    }

    function redraw(x, y){
        let radius = $(".form-variable-text-r").val().replace(",", ".");
        $('#paint-status').text(" x = " + x + "; y = " + y  + " (x; y;) = (" + (x / radius * 70 * 2 + 175) + "; " + -(y / radius * 70 * 2 - 176) + ")");
        let data = (x >= 0 && y <= 0 && y >= 2*x - radius) || (x <= 0 && y <= 0 && x >= -radius && y >= -radius/2) || (x >= 0 && y >= 0 && Math.sqrt(x*x + y*y) <= radius/2);
        if (data) {
            draw(x / radius * 70 * 2 + 175, -(y / radius * 70 * 2 - 176));
        }
        else{
            drawMiss(x / radius * 70 * 2 + 175, -(y / radius * 70 * 2 - 176));
        }
    }

    function drawMiss(x, y){
        //clearPaint();
        if (x > paint.width() || x < -paint.width() || y > paint.height() || y < -paint.height()) {
        }
        else{
            let l = paint[0].getContext('2d');
            l.setLineDash([1.5, 1.5]);
            l.beginPath();
            l.moveTo(x, 175);
            l.lineTo(x, y);
            l.moveTo(176, y);
            l.lineTo(x, y);
            l.stroke();
            l.fillStyle = "#ff0000";
            l.arc(x, y, 2, 0, 2 * Math.PI);
            l.fill();
        }
    }

    function draw(x, y){
        //clearPaint();
        if (x > paint.width() || x < -paint.width() || y > paint.height() || y < -paint.height()) {
        }
        else{
            let l = paint[0].getContext('2d');
            l.setLineDash([1.5, 1.5]);
            l.beginPath();
            l.moveTo(x, 175);
            l.lineTo(x, y);
            l.moveTo(176, y);
            l.lineTo(x, y);
            l.stroke();
            l.fillStyle = "#00ff00";
            l.arc(x, y, 2, 0, 2 * Math.PI);
            l.fill();
        }
    }

    function clearCanvas() {
        paint[0].getContext('2d').clearRect(0, 0, paint.width(), paint.height());
    }


    $('.form-text').on('click', function(event) {
        if (!validate()) {
            event.preventDefault();
        } else {
            $('#hidden_empty').val("false");
            $('#hidden_timezone').val(new Date().getTimezoneOffset());
        }
    });

    paint.on('click', function(event){
        if (!checkR()){
            $('#r-status').text("Проверьте правильность переменной R (2 <= R <= 5)");
            $('#paint-status').text("Невозможно определить координаты точки, проверьте правильность переменной R");
            return;
        }
        else{
            $('#r-status').text("");
            $('#paint-status').text("");
            let radius = $(".form-variable-text-r").val().replace(",", ".");
            let yValue = (-event.offsetY + 176) / 70 / 2;
            let xValue = (event.offsetX - 175) / 70 / 2;
            const a = [-5.0, -4.0, -3.0, -2,0, -1.0, 0.0, 1.0, 2.0, 3.0];
            let answer;
            let difference = Infinity;
            for (let i = 0; i < a.length; i++) {
                if (Math.abs(xValue * radius - a[i]) < difference) {
                    difference = Math.abs(xValue * radius - a[i]);
                    answer = a[i];
                }
            }
            let x = xValue * radius;
            let y = yValue * radius;
            let data = (x >= 0 && y <= 0 && y >= 2*x - radius) ||
                (x <= 0 && y <= 0 && x >= -radius && y >= -radius/2) ||
                (x >= 0 && y >= 0 && Math.sqrt(x*x + y*y) <= radius/2);
            $('#paint-status').text(" x = " + xValue + " R; y = " + yValue + " R" + " (x; nearest_enum_x; y;) = (" + x + "; " + answer + "; " + y + ")");
            if (data){
                draw(xValue * 70 * 2 + 175, -(yValue * 70 * 2 - 176) );
            }
            else{
                drawMiss(xValue * 70 * 2 + 175, -(yValue * 70 * 2 - 176) );
            }
            var target = $('.canvas-form-submit-button');
            var variableY = document.getElementsByClassName("canvas-form-variable-text-y").item(0);
            var variableX = document.getElementsByClassName("canvas-form-variable-text-x").item(0);
            var variableR = document.getElementsByClassName("canvas-form-variable-text-r").item(0);
            variableY.value = y;
            variableX.value = x;
            variableR.value = radius;
            jQuery(target).click();

        }
    });

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            if (checkR()) {
                clearCanvas();
                let x = 2.5;
                let y = 3.0;
                //redraw(x, y);
                let xValues = document.getElementsByClassName("table-x-value");
                let yValues = document.getElementsByClassName("table-y-value");
                for (let i = 0; i < xValues.length; i++) {
                    redraw(xValues.item(i).innerHTML, yValues.item(i).innerHTML);
                }

            } else {
            }
        });
    });

    var target = document.getElementsByClassName("ui-slider-range").item(0);
    observer.observe(target, { attributes : true, attributeFilter : ['style'] });

    $('.form-variable-text-r').on('input', function(event) {
        if (checkR()) {
            clearCanvas();
            let x = 2.5;
            let y = 3.0;
            //redraw(x, y);
            let xValues = document.getElementsByClassName("table-x-value");
            let yValues = document.getElementsByClassName("table-y-value");
            for (let i = 0; i < xValues.length; i++) {
                redraw(xValues.item(i).innerHTML, yValues.item(i).innerHTML);
            }

        } else {
        }
    });

});