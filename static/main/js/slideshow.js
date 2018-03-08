var current_slide = -1;
var delay_time = 7000;
var timer;
var num_slides = slide_ids.length;

function set_slide(target_slide) {
    current_slide = target_slide % num_slides;

    var slide_id = slide_ids[current_slide];

    $('.slide').removeClass('show');
    $(`#${slide_id}.slide`).addClass('show');

    $('button.info').removeClass('this');
    $(`button#${slide_id}.info`).addClass('this');
}

function slide_loop() {
    set_slide(current_slide + 1);

    $('.info#time-indicator').css({'width': '0vw'});
    setTimeout(function() {$('.info#time-indicator').animate({'width': '100%'}, delay_time - 500);}, 300)

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
    for (i = 0; i < slide_ids.length; i++) {
        $('#button-container').append(`<button class=\'info frosted hoverable\' id=\'${slide_ids[i]}\' onclick=\'reset_loop(${slide_ids[i]});\'></button>`);
    }

    reset_loop();
});

