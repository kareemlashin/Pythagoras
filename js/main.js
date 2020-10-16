$(document).ready(function() {
    $(".nav-item .nav-link").click(function() {
        let LinkHref = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(LinkHref).offset().top }, 1000);
        $(".nav-item .nav-link").removeClass("active-link");
        $(this).addClass("active-link")
    })
    $(".nav-sub li a").click(function() {
        let LinkHref = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(LinkHref).offset().top }, 1000);
        $(".nav-item .nav-link").removeClass("active");
        $(this).addClass("active")
    })


    $(window).scroll(() => {
        let section_count = $(".count1").offset().top;

        let x = $(window).scrollTop();
        let y = section_count - 300;
        if (x > y) {


            let count_num = $(".count1").attr("count-num");
            let count_default = $(".count1").text();
            let count_num_convert = parseInt(count_num);
            let increase = () => {
                if (count_default < count_num_convert) {
                    count_default++;
                    $(".count1").text(count_default);
                } else {
                    clearInterval(increase);
                }
            }
            setInterval(increase, 5);


            let count_num2 = $(".count2").attr("count-num");
            let count_default2 = $(".count2").text();
            let count_num_convert2 = parseInt(count_num2);
            let increase2 = () => {
                if (count_default2 < count_num_convert2) {
                    count_default2++;
                    $(".count2").text(count_default2);
                } else {
                    clearInterval(increase2);
                }
            }
            setInterval(increase2, 5);

            let count_num3 = $(".count3").attr("count-num");
            let count_default3 = $(".count3").text();
            let count_num_convert3 = parseInt(count_num3);
            let increase3 = () => {
                if (count_default3 < count_num_convert3) {
                    count_default3++;
                    $(".count3").text(count_default3);
                } else {
                    clearInterval(increase3);
                }
            }
            setInterval(increase3, 5);
        }

    });
});