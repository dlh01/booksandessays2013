// Generated by CoffeeScript 1.4.0
(function() {
  var init;

  init = function() {
    return Tabletop.init({
      key: '0AtjY5IWCDobBdF9KVlduRm1wZDRmS2l3cDZCeTBSMlE',
      simpleSheet: true,
      callback: function(data, tabletop) {
        var source, template;
        source = $("#entry-template").html();
        template = Handlebars.compile(source);
        $.each(data, function(i) {
          var content, html;
          content = {
            title: data[i].title,
            author: data[i].author,
            theme: data[i].theme,
            dateadded: data[i].dateadded
          };
          html = template(content);
          return $("#table-body").append(html);
        });
        return generateStatistics(data);
      }
    });
  };

  init();

}).call(this);
