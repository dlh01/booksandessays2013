var entriesPerMonth = [];

function generateStatistics(data) {

  var numInThisMonth = 0;
  var numOfMonth = 1;

  $.each(data, function(index) {
    monthAdded = parseInt(data[index].dateadded);
    if (monthAdded === numOfMonth) {
      numInThisMonth++;
      if (index == data.length - 1) {
        entriesPerMonth.push(numInThisMonth);
      }
    }
    if (monthAdded > numOfMonth) {
      entriesPerMonth.push(numInThisMonth);
      numOfMonth++;
      numInThisMonth = 1;
    }
  });

  $('.charts').html(entriesPerMonth.toString());
  $('.charts').peity('bar');

}
