function drawChart(result) {
  const dataY = [
    { year: 2010, count: result["ESG"][0] },
    { year: 2011, count: result["ESG"][1] },
    { year: 2012, count: result["ESG"][2] },
    { year: 2013, count: result["ESG"][3] },
    { year: 2014, count: result["ESG"][4] },
    { year: 2015, count: result["ESG"][5] },
    { year: 2016, count: result["ESG"][6] },
    { year: 2017, count: result["ESG"][7] },
    { year: 2018, count: result["ESG"][8] },
    { year: 2019, count: result["ESG"][9] },
    { year: 2020, count: result["ESG"][10] },
  ];

  const data = {
    labels: dataY.map(row => row.year),
    datasets: [
      {
        type: 'bar',
        label: 'ESG',
        data: dataY.map(row => row.count),
        borderColor: 'red',
        backgroundColor: 'green',
        stack: 'stacked',
       
      },
      {
        label: 'ESG',
        data: dataY.map(row => row.count),
        borderColor: 'blue',
        backgroundColor: 'white',
        stack: 'stacked'
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'ESG 评级历史图标'
        }
      },
      scales: {
        y: {
          stacked: true
        }
      }
    },
  };

  new Chart(
    document.getElementById('myChart'),
    config
    // {
    //   type: 'bar',
    //   data: {
    //     labels: data.map(row => row.year),
    //     datasets: [
    //       {
    //         label: '每年ESG:',
    //         data: data.map(row => row.count),
    //         borderRadius:10
    //       }
    //     ]
    //   }
    // }
  );
}
