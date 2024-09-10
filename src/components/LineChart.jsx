import React, { PureComponent } from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';

const data = [
  {
    name: 'MON',
    Market_Rate: 6.6,
  },
  {
    name: 'TUE',
    Market_Rate: 8.5,
  },
  {
    name: 'WEN',
    Market_Rate: 9.5,
  },
  {
    name: 'THU',
    Market_Rate:5.6,
  },
  {
    name: 'FRI',
    Market_Rate: 6.6,
  },
  {
    name: 'SAT',
    Market_Rate: 3.1,
  },
  {
    name: 'SUN',
    Market_Rate: 7.5,
  }
];

export default class LineChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#ffffff' }} 
          />
          <YAxis 
            domain={[2.9, 10.52]} 
            tick={{ fill: '#ffffff' }}
            tickCount={50}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#333', color: '#ffffff' }} 
            itemStyle={{ color: '#ffffff' }} 
          />
          <Area 
            type="monotone" 
            dataKey="Market_Rate" 
            stroke="#49C8B7" 
            fill="#49C8B7" 
            fillOpacity={0.1} 
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
