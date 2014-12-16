flag = false;
num = 0;
function toggle(){
    flag = !flag;
    if(flag == true){
        $("#repeat_btn").addClass("btn-warning");
        $("#repeat_btn").removeClass("btn-info");
    }
    else{
        $("#repeat_btn").addClass("btn btn-default");
        $("#repeat_btn").removeClass("btn-warning");
    }
}


left_disp = false;

$(function(){
    left_artist();
    $('#left_btn').hover(function(){
        $('#left_btn').stop().animate({width: 100}, {duration:100,
            complete: function () {
                $('#left_btn').css("width", "140px").css("background","url(images/trend_on.png)");
            }
        });

    }, function(){

        $('#left_btn').stop().animate({width: 100}, {duration:100,
            complete: function () {
                $('#left_btn').css("background","url(images/trend_off.png)");
            }
        });
    });
});

function left_artist(){
    left_disp = !left_disp;
    if(left_disp == true){
        $(".l_col_fix").animate( { opacity: 'show',}, { duration: 1000, easing: 'swing', } );
    }
    else{
        $(".l_col_fix").animate( { opacity: 'hide',}, { duration: 1000, easing: 'swing', } );
    }
}
