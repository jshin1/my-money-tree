import React, { Component } from 'react';
import { Doughnut, Polar } from 'react-chartjs-2';

const data = {
labels: [
  'Red',
  'Green',
  'Yellow'
],
datasets: [{
  data: [300, 50, 100],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ]
}]
};

const data2 = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

class Home extends Component {

  render() {
    return (
      <div>
        <h2 className='header'><em>HOME</em></h2>

      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data}
          height={50}
        />
      </div>

        <div>
          <h2>Polar Example</h2>
          <Polar data={data2}
            height={50}
          />
        </div>
      </div>
    );
  }

}

export default Home;
