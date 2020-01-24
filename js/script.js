$(document).ready(function () {
  $("#invio").keypress(function () {
    if(event.which == 13 || event.keyCode == 13) {
        var testo = $("#invio").val();
        var nuovoElemento = $(".template .copia").clone();
        nuovoElemento.find("p").text(testo);
        $("#invio").val("");
        $(".conversazione").append(nuovoElemento);
        setTimeout(function () {
          var messaggioRicevuto = $(".template .copia-ricevuto").clone();
          messaggioRicevuto.children("p").text("ok");
          $(".conversazione").append(messaggioRicevuto);
        }, 1000);
      }
    })
    $(".fa-telegram-plane").click(function () {
      var testo = $("#invio").val();
      var nuovoElemento = $(".template .copia").clone();
      nuovoElemento.find("p").text(testo);
      $(".conversazione").append(nuovoElemento);
      $("#invio").val("");
      setTimeout(function () {
        var messaggioRicevuto = $(".messaggio-ricevuto").clone();
        messaggioRicevuto.children("p").text("ok");
        $(".conversazione").append(messaggioRicevuto);
      }, 1000);
    });
    $(".cerca-utente").keypress(function () {
      if(event.which == 13 || event.keyCode == 13){
        var datoRicerca = $(".cerca-utente").val();
        var riga = $(".wrap-menu-utenti li");
        for (var i = 0; i < riga.length; i++) {
          var name = $(".wrap-menu-utenti").find("h4").eq(i).text();
          // console.log(name);
          if (name.includes(datoRicerca)) {
            riga.eq(i).show();
          }
          else {
            riga.eq(i).hide();
          }
        }
      }
    });
    $(".div-search i").click(function () {
      var datoRicerca = $(".cerca-utente").val();
      var riga = $(".wrap-menu-utenti li");
      for (var i = 0; i < riga.length; i++) {
        var name = $(".wrap-menu-utenti").find("h4").eq(i).text();
        // console.log(name);
        if (name.includes(datoRicerca)) {
          riga.eq(i).show();
        }
        else {
          riga.eq(i).hide();
        }
      }
    });

    // cancellazione messaggi
    $(".fa-angle-down").click(function () {
      $(this).next().toggleClass("display-none");
    });
    $(".delete").click(function () {
      $(this).parents(".contenitore-messaggio-inviato").remove();
    });
    $(document).on("click",".fa-angle-down",function () {
      $(this).next().toggleClass("display-none");
    });
    $(document).on("click",".delete",function () {
      $(this).parents(".contenitore-messaggio-inviato").remove();
    })
  });
