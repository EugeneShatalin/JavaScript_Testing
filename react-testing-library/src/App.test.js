import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/text/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('renders learn react link', async () => {
    render(<App />);
   /* const helloWorldElem = screen.queryByText(/hello2/i);
    expect(helloWorldElem).toBeInTheDocument();*/
    const data = await screen.findByText(/data/i)
    expect(data).toBeInTheDocument();
    expect(data).toHaveStyle({color: 'red'});
    screen.debug()
  });

  test('CLICK EVENT', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  })

  test('INPUT EVENT', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/text/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    fireEvent.input(input, {
      target: {value: '123456'}
    })
    expect(screen.queryByTestId('value-elem')).toContainHTML('123456');
  })

  test('INPUT EVENT(userEvent)', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/text/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    userEvent.type(input, '654321')
    expect(screen.queryByTestId('value-elem')).toContainHTML('654321');

  })
})

