$('.slideBtn').click(
    function() {
        $('.leftBox').toggle();
        var status = $('.leftBox').css("display");
        if (status == 'none') {
            $('.rightBox').css("marginLeft", "0");
            $(this).css("background",
                    "red");
        } else {
            $('.rightBox').css("marginLeft", "241px");
            $(this).css("background",
                    "green");
        }
    })