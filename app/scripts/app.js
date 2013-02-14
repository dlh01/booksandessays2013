function init() {
  Tabletop.init( {
    key: '0AtjY5IWCDobBdF9KVlduRm1wZDRmS2l3cDZCeTBSMlE',
    simpleSheet: true,
    callback: function(data, tabletop) {
      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);

      $.each( data, function(i) {
        var content = {
          title: data[i].title,
          author: data[i].author,
          theme: data[i].theme,
          dateadded: data[i].dateadded
        }
        var html = template(content);
        $("#table-body").append(html);
      });
    }
  } )
}
