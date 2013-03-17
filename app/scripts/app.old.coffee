init = () -> 
  Tabletop.init(
    key: '0AtjY5IWCDobBdF9KVlduRm1wZDRmS2l3cDZCeTBSMlE'
    simpleSheet: true
    callback: (data, tabletop) ->
      source = $("#entry-template").html()
      template = Handlebars.compile(source)

      $.each data, (i) ->
        content = {
          title: data[i].title,
          author: data[i].author,
          theme: data[i].theme,
          dateadded: data[i].dateadded
        }
        html = template(content)
        $("#table-body").append(html)

      generateStatistics(data)
   ) 

init()
