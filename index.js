$('#send').on('click', function() {
    if ($('#text')[0].value == '') {return}
    var $p = document.createElement('p')
    $p.innerText = $('#text')[0].value
    $('#textbox').append($p)
})