$ (function(){

    var chats = $('#chats');
    //var $mykey = 77777; //$('myKey');
    //var $idrequest = $('idrequest');
    var usermsg = document.getElementById('usermsg');
    var send = document.getElementById('Send');
    var username = 'Batman';

    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

/*    $.ajax({
        beforeSend: function() {
            alert("Hello!");
        },
        url:"www.example.com"
    });*/

    send.addEventListener('click', function(){
        time = new Date();
        h = time.getHours();
        m = time.getMinutes();
        s = time.getSeconds();
        chats.append('<li>'+ h + " : " + m + " : " + s + " " + " : " +  username + " : " + usermsg.value +'</li>');
        usermsg.value = "";

        $('#message').ajaxForm({
            beforeSend: function () {
                alert('Hi');
            },
            url: 'https://codegorilla.nl/read_write/api.php',
            dataType: 'text',
            success: function (re) {


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
            }
        });
        })

 /*       $('#message').ajaxForm({
            url : 'https://codegorilla.nl/read_write/api.php',
            dataType : 'text',
            success : function (read) {

                //var response2 = '';
                $.ajax({
                    type: "GET",
                    url: "https://codegorilla.nl/read_write/api.php?action=read&mykey=" + $mykey + "&id=" + read,
                    async: false,
                    success : function(text)
                    {
                        //response2 = text;

                        $chats.append('<ĺi>'  + h + " : " + m + " : " + s + " " + + " : " + ('usermsg').value + " : " + newwrite.value + '</li>');
                    }
                });

            },
            error: function(){
                alert('error loading message');
            }
    });*/



/*    $('#sendmessage').on('click', function(){
        var $value = $('usermsg');
            //mykey = $mykey.val(),
        $.ajax({
           // type: 'POST',
            url: 'https://codegorilla.nl/read_write/api.php/action=read&mykey='+ $mykey +'value=' + $value.val(),
            //dataType: 'writing',
            async: false,
            success: function(newwrite){
                alert('Hi');
                $chats.append('<ĺi>' + newwrite.id + " : " + newwrite.value + '</li>');
            },
            error: function(){
                alert('error sending message');
            }
        });
    });*/

});