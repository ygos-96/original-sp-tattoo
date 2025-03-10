$(document).ready(function () {
    $(".galeria-item").click(function () {
        var src = $(this).attr("src");
        $("#modalImage").attr("src", src);
    });
});
$(document).ready(function () {
    $(".galeria-item").click(function () {
        var src = $(this).attr("src");
        $("#modalVideo").attr("src", src);
    });
});