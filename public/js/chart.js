var barData = {
    labels: ["10th standard","12th standard","B.Engg-1st sem","B.Engg-2nd sem","B.Engg-3rd sem","B.Engg-4th sem","B.Engg-5th sem","B.Engg-6th sem"],
    datasets: [
        {
            label: '2010 customers #',
            fillColor: '#382765',
            data: [76.57,66,65.76,72.47,63.78,68.89,64.11,74.22],
        },
    ]
};
$('#marks').on('inview', function(event, isInView) {
  if (isInView) {
    var context = document.getElementById('marks').getContext('2d');
    var clientsChart = new Chart(context).Bar(barData);
  }
});


var DoData = [
   {
      value: 10,
      label: 'Java',
      color: '#811BD6'
   },
   {
      value: 30,
      label: 'CSS',
      color: '#4a9a1d'
   },
   {
      value : 10,
      label: 'C',
      color: '#9CBABA'
   },
   {
      value: 30,
      label: 'JavaScript',
      color: '#1f7332'
   },
   {
      value : 35,
      label: 'HTML',
      color: '#6AE128'
   },
   {
      value : 10,
      label: 'C++',
      color: '#482e5f'
   },
   {
      value : 20,
      label: 'Node.js',
      color: '#9ba70d'
   },
   {
      value: 24,
      label: 'MONGO DB',
      color: '#811BD6'
   },
   {

      value : 35,
      label: 'jQuery',
      color: '#0dab31'
   }
];
var pieData = [
   {
      value: 10,
      label: 'Android Programming',
      color: '#811BD9'
   },
   {
      value: 27,
      label: 'Angular.js',
      color: '#b2e128'
   },
   {
      value: 15,
      label: 'Data sciences with R',
      color: '#b20128'
   },

];