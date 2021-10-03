'use strict';

$(function(){
    //проверка-------------------------------------------
    $(".air_airtext").on('input', function(){
        if(Number($('.air_airtext').val()) || $('.air_airtext').val() === ""){
            $(".air_airtext").css('color','black');
        } else {
            $(".air_airtext").css('color','red');
        }
    });
    $(".circle").on('input', function(){
        if(Number($('.circle').val()) || $('.circle').val() == ""){
            $(".circle").css('border','solid 2px black');
        } else {
            $(".circle").css('border','solid 4px red');
        }
    });
    $("input#square1").on('input', function(){
        if(Number($('input#square1').val()) || $('input#square1').val() === ""){
            $("input#square1").css('border','solid 2px black');
        } else {
            $("input#square1").css('border','solid 4px red');
        }
    });
    $("input#square2").on('input', function(){
        if(Number($('input#square2').val()) || $('input#square2').val() === ""){
            $("input#square2").css('border','solid 2px black');
        } else {
            $("input#square2").css('border','solid 4px red');
        }
    });
    /*block 1 and 2 (checkbox)----------------------------------------------------------------------------------------------------*/
    $('#group input:checkbox').click(function(){
        if ($(this).is(':checked')) {
            $('#group input:checkbox').not(this).prop('checked', false);
        };
        if($('.click_square').is(':checked')){
            $('.square').show(100);
            $('.text_square').show(100);
            $('.square').addClass("square__style");
        } else {
            $('.square').hide(100);
            $('.text_square').hide(100);
        };
            if($('.click_circle').is(':checked')){
            $('.circle').show(100);
            $('.text_circle').show(100);
            $('.circle').addClass("circle__style");
        } else {
            $('.circle').hide(100);
            $('.text_circle').hide(100);
        };
    });
    // Смена расчета при смене чекбокса-------------------------------------------------------------------------
    $('#group input:checkbox').click(function(){
        if ($(this).is(':checked')) {
            $('#group input:checkbox').not(this).prop('checked', false);
        };
        if($('.click_square').is(':checked')){
            resultSquare()
        }
        if($('.click_circle').is(':checked')){
            resultCircle()     
        } 
    });
    // Расчеты и проверки-----------------------------------------------------------------------------------------------------------
    let resultCircle = function(){
        if(Number ($('.air_airtext').val()) && Number ($('.circle').val())){
            let temp = Number($('input.air_airtext').val()) / (3.14*3600*(Math.pow((Number($('input.circle').val())/2000), 2)));
            $(".answer__text").val(temp).text("Ответ: V = " + temp.toFixed(2) + " м/с.");
        }
        else{
            let temp = 0;
            $(".answer__text").val(temp).text("Ответ: V = " + temp.toFixed(2) + " м/с.");
        }
    }
    let resultSquare = function(){
        if(Number($('.air_airtext').val()) && Number($('input#square1').val()) && Number($('input#square2').val())){
            let temp = Number($('input.air_airtext').val()) / (((Number($('input#square1').val()))*(Number($('input#square2').val()))/1000000)*3600);
            $(".answer__text").val(temp).text("Ответ: V = " + temp.toFixed(2) + " м/с.");
        }
        else{
            let temp = 0;
            $(".answer__text").val(temp).text("Ответ: V = " + temp.toFixed(2) + " м/с.");
        }
    }

    //Вывод результатов----------------------------------------------------------------------------------------------------
    $(".click_circle").on('click', function(){
        $("input[name=input]").on('input', function(){
            resultCircle(); 
        })
    });
    
    $(".click_square").on('click', function(){
        $("input[name=input]").on('input', function(){
            resultSquare();
        })
    });    
 
         
   
    /*slider----------------------------------------------------------------------------------------------------*/
    $( ".slider" ).slider({
        animate: "slow",
        min: 0,
        max: 8000,
        step: 5,
        value: 500,
        
        slide : function(event, ui) {
            $(".air_airtext").val(ui.value);
            $(".air_airtext").css('color','black');
                if($(".click_circle").prop("checked")){
                    resultCircle();
                } 
                if($(".click_square").prop("checked")){
                    resultSquare();  
                }
                if($(".click_square").prop("checked") == false && $(".click_circle").prop("checked") == false ){
                    let temp = 0;
                    $(".answer__text").val(temp).text("Ответ: V = " + temp.toFixed(2) + " м/с.");
                }   
        }
    });
    
    $(".slider").css('border-bottom-right-radius','50px');
    $(".slider").css('border-bottom-left-radius','50px');
    $(".slider").css('border','none');
    $(".slider").css('background','linear-gradient(to left, hsl(123, 84%, 45%), hsl(69, 87%, 50%))');
    $(".slider").css('height','15px');
    $(".ui-state-hover, ui-widget-content").css('background', 'green')
    $(".ui-state-default").css('border', '3px solid #131111');


    /*block 3----------------------------------------------------------------------------------------------------*/
    $('.btn_hello_text').on('click', function(){
        $('.hello_text').toggleClass('hello_text_open');
    });
    
});
