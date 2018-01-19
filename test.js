

/*var send = document.getElementById('Send');

send.addEventListener('click', callAjax());*/


    function callAjax(){
        alert("Hi3");
    $.ajax({
        url: "https://codegorilla.nl/read_write/api.php?action=read&mykey=12345&id=3000",
        type: "GET",
        /*event.preventDefault(),*/
        /*alert: ("Thank you for your comment!")*/
        beforeSend: function () {
                    alert('Hi');
                },
        success: function (yes) {
            alert('Hi2')
                },
            })
    }


/*send.addEventListener('click', ajaxForm(function() {


    alert('Hi'),
    alert('Thank you for your comment!')
    })*/
    /*url:'https://codegorilla.nl/read_write/api.php?action=write&mykey=12345&value=how%20are%20you'*/

/*$('#message').ajaxForm({
    beforeSend: function () {
        alert('Hi2');
    },
    url: 'https://codegorilla.nl/read_write/api.php',
    dataType: 'text'*/
/*    success: function (re) {


        $.ajax({
            beforeSend: function () {
                alert('Hi');
            },
            url: 'https://codegorilla.nl/read_write/api.php?action=write&mykey=12345&value=' + usermsg.value,
            success: function (read) {
                chats.append('<li>' + read + '</li>');
            },
            error: function (data) {
                alert("Stuffs hppening!");
            }
        })
    }*/
/*);*/

