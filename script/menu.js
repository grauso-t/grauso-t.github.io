$(document).ready(function() {
    $("nav#navbar").load("/resources/navbar.html");
    $("footer#footer").load("/resources/footer.html");
});

window.onresize = function(event) {
    if (document.documentElement.clientWidth > 900)
        $("div#navbar-menu").show();
    else
        $("div#navbar-menu").hide();
};

function showMenu() {
    $("div#navbar-menu").fadeToggle("fast");
}