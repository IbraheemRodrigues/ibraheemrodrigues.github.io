var currentSlide = 0;

var delayTime = 7000;

var timer;

function setSlide(num) {
    currentSlide = num;

    $("button.info").removeClass('this');
    $(`button#${String(num)}.info`).addClass('this');

    $(".slide").css("display", "none");
    $(`#${String(ids[num])}.slide`).css("display", "block");
}

function nextSlide() {
    setSlide( ids.length-1 <= currentSlide ? 0 : currentSlide+1 );
    $(".info#timeleft").css("width", "0");
    $(".info#timeleft").animate({"width": "100%"}, delayTime - 100);

}

function userSetSlide(num) {
    clearInterval(timer);
    $(".info#timeleft").stop();

    setSlide(num);

    $(".info#timeleft").animate({"width": "0"}, 400, "swing", function() {
        $(".info#timeleft").animate({"width": "100%"}, delayTime - 100);
        
        timer = setInterval(nextSlide, delayTime);
    });
}

//generate buttons
for (num in ids) {
    $("#button-container").append(`<button class="info hoverable" id="${num}" onclick="userSetSlide(${num})"></button>`)
}

userSetSlide(currentSlide);
