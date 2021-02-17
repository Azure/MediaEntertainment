$(function () {
  // Model for cards
  $('.hover-info').dialog({
    autoOpen: false,
    model: true,
    show: {
      effect: "fade",
      duration: 100
    },
    hide: {
      effect: "fade",
      duration: 100
    },
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      }
    }
  });

  $('.card').on("click", function () {
    var id = $(this).data('id');
    $(id).dialog("open");
  });

  // Nav Menu 
  $('.navitem').on("click", function () {
    $('.home-section').hide();
    //Find the currently active menu item and hide the content.
    var active = $('.contentnavmenu').find('li.contentnav-active');
    var curActiveId = $(active).data('id');
    $(active).removeClass('contentnav-active')
    $(curActiveId).hide();
    // Show the content for the clicked item.
    var id = $(this).data('id');
    $(id).show();
    $(this).addClass('contentnav-active')
  });

  //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
  var parts = location.href.split("#");
  if (parts.length > 1) {
    var trgt = parts[1];
    $('.navitem[data-id="#' + trgt + '"').click();
  }
  else{
    $('.home-section').show();
  }
});