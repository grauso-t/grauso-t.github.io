$("nav#navbar").ready(function() {
    $("nav#navbar").load("/resources/navbar.html", function() {

        let currentPage = document.title;
    
        $(".navbar-item").each(function() {
    
            if (currentPage.includes(this.getAttribute("data-item-type"))) {
                $(this).closest("div").addClass("currentPage");
            }
        });
    });
});

$("footer#footer").ready(function() {
    $("footer#footer").load("/resources/footer.html");
});

window.onresize = function(event) {

    if (document.documentElement.clientWidth > 600) {
        $("div#navbar-menu").show();
        $("div.mobile-menu").show();
    }
    else {
        $("div#navbar-menu").hide();
        $("div.mobile-menu").hide();
    }
};

function showMenu() {
    $("div#navbar-menu").fadeToggle("fast");
    $("div.mobile-menu").fadeToggle("fast");
}