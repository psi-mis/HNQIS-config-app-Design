$(document).ready(function () {

    var jqxhr = $.getJSON("data.json", function () {
        console.log("success");
    })
        .done(function () {
            console.log("second success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });

    // Set another completion function for the request above
    jqxhr.always(function () {
        console.log("second complete");
    });

    //Number of service delivery points providing abortion services
    $('#nsdpras').on("click", function () {
        var v_message_title = $(this).siblings('span').text();
        var v_message_dialog = $('#nsdpras_inf').text();
        $('.scrim').css({
            'display': 'block'
        });

        $('#dialog .d_title').text(v_message_title);
        $('#dialog .d_message').text(v_message_dialog);
    });

    //Number of people receiving Abortion Services
    $('#unk').on("click", function () {
        var v_message_title = $(this).siblings('span').text();
        var v_message_dialog = $('#unk_inf').text();
        $('.scrim').css({
            'display': 'block'
        });

        $('#dialog .d_title').text(v_message_title);
        $('#dialog .d_message').text(v_message_dialog);
    });

    //Abortion with Medication
    $('#awm').on("click", function () {
        var v_message_title = $(this).siblings('span').text();
        var v_message_dialog = $('#awm_inf').text();
        $('.scrim').css({
            'display': 'block'
        });

        $('#dialog .d_title').text(v_message_title);
        $('#dialog .d_message').text(v_message_dialog);
    });

    //Dilation & Curettag
    $('#dc').on("click", function () {
        var v_message_title = $(this).siblings('span').text();
        var v_message_dialog = $('#dc_inf').text();
        $('.scrim').css({
            'display': 'block'
        });

        $('#dialog .d_title').text(v_message_title);
        $('#dialog .d_message').text(v_message_dialog);
    });

    //Condoms 
    $('#cndms').on("click", function () {
        var v_message_title = $(this).siblings('span').text();
        var v_message_dialog = $('#cndms_inf').text();
        $('.scrim').css({
            'display': 'block'
        });

        $('#dialog .d_title').text(v_message_title);
        $('#dialog .d_message').text(v_message_dialog);
    });

    //Condoms f
    $('#cndms_f').on("click", function () {
        var v_message_title = $(this).siblings('span').text();
        var v_message_dialog = $('#cndms_f_inf').text();
        $('.scrim').css({
            'display': 'block'
        });

        $('#dialog .d_title').text(v_message_title);
        $('#dialog .d_message').text(v_message_dialog);
    });

    //dialog

    $('#dialog .i_close, .btn').on("click", function () {
        $('.scrim').css({
            'display': 'none'
        });
    });

    //rounding indicatorcm2kvxdpCOi

    //$("#indicatorcm2kvxdpCOi").val(52.35);

    var x = $("#indicatorcm2kvxdpCOi").val();
    rounding(x);


    $("#indicatorcm2kvxdpCOi").change(function () {
        rounding($(this).val());
    });

    function rounding(value) {
        var Y = Math.round(value);
        var valY = Y.toString() + "%";
        $("#rounding").val(valY);
    }
});