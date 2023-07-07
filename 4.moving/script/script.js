// $(document).ready(function () {
//     $('.animation-btn').click(function () {
//         $('.green').animate({
//             width: "toggle",
//             height: "toggle"
//         },
//             {
//                 duration: 5000,
//                 specialEasing: {
//                     width: "easeInOutSine",
//                     height: "easeInOutSine",
//                 },
//                 complete: function () {
//                     alert('Animation Complete!')
//                 }
//             }
//         );
//     });
// });

$(document).ready(function () {
    $(".animation-btn").click(function () {
        $(".box.green").animate(
            {
                left: '450px',
                opacity: '0.5',
                height: '450px',
                width: '450px'
            }
        );
    });
});  
