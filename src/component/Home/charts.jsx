import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
            Name: 'Web-dev',
            number: 1340,
            intern:1200
        },
        {
            Name: 'devops',
            number: 1300,
            intern:1200
        },
        {
            Name: 'data-science',
            number: 2200,
            intern:1400
        },
        {
            Name: 'Graphics',
            number: 1500,
            intern:200
        },
        {
            Name: 'App-dev',
            number: 3500,
            intern:1220
        },
        {
            Name: 'Machine-Learn',
            number: 3120,
            intern:1600
        },
    ];
    
    return (
        <ResponsiveContainer width="75%" aspect={3} className="mx-auto">
            <BarChart data={data} width={400} height={400}>
                <XAxis dataKey="Name" />
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="number" fill="#8884d8" 
                 />
                <Bar dataKey="intern" fill="#ffc658" 
                 />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default Chart;
