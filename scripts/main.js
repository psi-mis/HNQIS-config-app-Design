$(document).ready(function () {
    component_bar_slctr('program');

    $(".cont_prg").on("click", function () {
        goToURL('list_program_stages');
    });

    $(".prgms_path").on("click", function () {
        goToURL('index');
    });

    function goToURL(myPath) {
        console.log(myPath);
        location.href = '../' + myPath + '.html';
    }
});