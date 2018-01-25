$(function() {

    //Definieer jouw sleutel en de message
    var chats = $("#chats");

    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    // Stuur een message en ontvang id terug
    $("#Send").on("click", (function (e) {
            e.preventDefault();
            var mykey = $("#mykey").val();
            var usermsg = $('#usermsg').val();
            var data = "action=write&mykey=" + encodeURIComponent(mykey) + "&value=" + encodeURIComponent(usermsg);
            $.ajax({
                type: "GET",
                cache: false,
                url: "https://codegorilla.nl/read_write/api.php",
                async: false,
                success: function (idMessage) {

                    //  Stuur id en ontvang jouw message terug
                    $.ajax({
                        type: "GET",
                        url: "https://codegorilla.nl/read_write/api.php?action=read&mykey=" + mykey + "&id=" + idMessage,
                        async: false,
                        success: function (newText) {

                            time = new Date();
                            h = time.getHours();
                            m = time.getMinutes();
                            s = time.getSeconds();


                            //Laat zien op scherm
                            chats.append('<li>' + h + " : " + m + " : " + s + " " + " : " + newText + '</li>');

                        }
                    });

                },
                data: data
            })
        })
    )

    //Vraag voor alle id's  van je key
    $("#Enter").on("click", (function (e) {
            e.preventDefault();
            var mykey = $("#mykey").val();
            $.ajax({
                type: "GET",
                url: "https://codegorilla.nl/read_write/api.php?action=list&mykey=" + mykey,
                async: false,
                success: function (text) {
                    var textIdlist2 = text.split(',');
                    textIdlist2.forEach(function (element) {

                        //Stuur elke id terug en ontvang de bijbehorende messages
                        $.ajax({
                            type: "GET",
                            url: "https://codegorilla.nl/read_write/api.php?action=read&mykey=" + mykey + "&id=" + element,
                            async: false,
                            success: function (texts) {
                                time = new Date();
                                h = time.getHours();
                                m = time.getMinutes();
                                s = time.getSeconds();


                                //Laat zien op scherm
                                chats.append('<li>' + h + " : " + m + " : " + s + " " + " : " + texts + '</li>');

                            }
                        });
                    });
                }
            });

        })
    )
})
