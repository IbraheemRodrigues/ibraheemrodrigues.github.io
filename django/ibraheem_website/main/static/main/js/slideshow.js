var current_slide = -1;
var delay_time = 7000;
var timer;
var num_slides = slide_ids.length;

function set_slide(target_slide) {
    current_slide = target_slide % num_slides;

    var slide_id = slide_ids[current_slide];

    console.log(slide_id);

    $('.slide').removeClass('show')
    $(`.slide#${slide_id}`).addClass('show')
}

function slide_loop() {
    set_slide(current_slide + 1);
    $('.info#time-inidcator').css({'max-width': '0%'});

    // $('.info#time-indicator').stop()
    $('.info#time-indicator').animate({'max-width': '100%'}, delay_time - 500);
}

function reset_loop() {
    clearInterval(timer);
    
    slide_loop();
    timer = setInterval(slide_loop, delay_time);
}

//generate buttons
for (id in slide_ids) {
    $('#button-container').append(`<button class=\'info frosted hoverable\' id=\'${id}\' onclick=\'reset_slide_to(${id});\'></button>`);
}

reset_loop();

