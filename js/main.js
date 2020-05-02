// Start Dynamyc the page

$(document).ready(function(){
    $(".icon").click(function(){
        $(".opt-color").fadeToggle(100);
    });

    $(".opt-color ul li")
        .eq(0).css("backgroundColor", "#007bff").end()
        .eq(1).css("backgroundColor", "#218838").end()
        .eq(2).css("backgroundColor", "#C82333").end()
        .eq(3).css("backgroundColor", "#E0A800")

    $(".opt-color ul li").click(function(){
        $("link[href*='col']").attr("href", $(this).attr("data-value"))
    });

    // $(window).on('load', function(){
    //     $(".loading").addClass('complete')
    //     // $(".loading").fadeOut(2000)
    // })
    
})