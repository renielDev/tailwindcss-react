import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {vi} from 'vitest';
import Button from './Button';

describe('Button', () => {
  test('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white dark:bg-gray-800 px-4 py-3 rounded-sm transition-opacity duration-300 hover:opacity-75');
  });

  test('renders with primary intent', () => {
    render(<Button intent="primary">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-200 dark:bg-cyan-800 px-4 py-3 rounded-sm transition-opacity duration-300 hover:opacity-75');
  });

  test('renders with large size', () => {
    render(<Button size="large">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white dark:bg-gray-800 px-6 py-5 rounded-sm transition-opacity duration-300 hover:opacity-75');
  });

  test('renders with super-rounded border', () => {
    render(<Button border="super-rounded">Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white dark:bg-gray-800 px-4 py-3 rounded-full transition-opacity duration-300 hover:opacity-75');
  });

  test('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    // await is needed here
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});