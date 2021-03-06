import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Content from '..';

describe('<Content />', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Content />, div);
  });

  it('renders playerName correctly', () => {
    const { getByTestId } = render(<Content playerName="Test Name" />);

    const playerName = getByTestId('playerName');

    expect(playerName).toHaveTextContent('TN');
  });

  it('renders title correctly', () => {
    const { getByTestId } = render(<Content title="Test Title" />);

    const title = getByTestId('title');

    expect(title).toHaveTextContent('Test Title');
  });

  it('renders percentage correctly', () => {
    const { getByTestId } = render(<Content percentage="25%" />);

    const percentage = getByTestId('percentage');

    expect(percentage).toHaveTextContent('25%');
  });

  it('renders className correctly', () => {
    const { getByTestId } = render(<Content className="class-test" />);

    const className = getByTestId('className');

    expect(className).toHaveClass('class-test');
  });

  it('match snapshot', () => {
    expect(
      renderer
        .create(
          <Content
            title="Test title"
            playerName="Test Player Name"
            percentage="25%"
            className="class-test"
          />
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});
