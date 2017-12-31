var current_slide = -1;
var delay_time = 7000;
var timer;
var num_slides = slide_ids.length;

function set_slide(target_slide) {
    current_slide = target_slide % num_slides;

    var slide_id = slide_ids[current_slide];

    $('.slide').removeClass('show')
    $(`.slide#${slide_id}`).addClass('show')
}

function slide_loop() {
    set_slide(current_slide + 1);

    $('.info#time-indicator').css({'width': '0vw'});
    setTimeout(() => {$('.info#time-indicator').animate({'width': '100vw'}, delay_time - 500);}, 300)

}

function reset_loop(num) {
    clearInterval(timer);
    $('.info#time-indicator').stop();

    if (num != null) {
        set_slide(num - 1);
    }
    
    slide_loop();
    timer = setInterval(slide_loop, delay_time);
}

$(document).ready(function(){

    //generate buttons
    for (id in slide_ids) {
        $('#button-container').append(`<button class=\'info frosted hoverable\' id=\'${id}\' onclick=\'reset_loop(${id});\'></button>`);
    }

    reset_loop();
});

