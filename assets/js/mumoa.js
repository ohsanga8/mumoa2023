function popOpen() {
    var modalPop = $('.modal-wrap');
    var modalBg = $('.modal-bg');

    $(modalPop).show();
    $(modalBg).show();
};

function popClose() {
    var modalPop = $('.modal-wrap');
    var modalBg = $('.modal-bg');

    $(modalPop).hide();
    $(modalBg).hide();
};

function changeRegion(region) {
    $('#selectedRegion').text(region);
    popClose();
}

function category(c_id) {
    if (c_id == 'all') {
        $('#museums').show();
        $('#exhibitions').show();
    } else if (c_id == 'mus') {
        $('#museums').show();
        $('#exhibitions').hide();
    } else if (c_id == 'exh') {
        $('#museums').hide();
        $('#exhibitions').show();
    }
};
/*
function search() {
    $(location).attr('href', 'search.html');
    var str = document.getElementById('search_input').value;
    $('#search_result').text(str);
}
*/
/*
$(document).ready(function() {
    $("form").submit(function(event) {
        var search = $('#search_input').val();
    })
    $('#submit').click(function() {
        $("#search_form").submit();
    });
});
*/

function search() {
    $("#search_form").attr("action", "search.html").submit();
};


