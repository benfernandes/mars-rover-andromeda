import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { GetImagesByQuantity } from './api/MarsRoverAPI';

test('app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

test('MarsRover Api returns the correct amount of img URLs', async () => {
    const urlArray = await GetImagesByQuantity(100);
    expect(urlArray.length).toBe(100);
})


