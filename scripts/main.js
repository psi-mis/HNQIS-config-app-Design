$(document).ready(function () {
    component_bar_slctr('program');
    $(".cont_prg").on("click", function () {
        goToURL('lis_program_stages');
     });

     function goToURL(myPath) {
         console.log(myPath);
        location.href = '../'+ myPath + '.html';
      }
});