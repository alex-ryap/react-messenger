import { render, screen } from '@testing-library/react';
import { PageTitle } from '..';

describe('Page title tests', () => {
  it('renders page title', () => {
    render(<PageTitle title="Home" />);

    const title = screen.getByText('Home');
    expect(title).toBeInTheDocument();
  });

  it('renders page subtitle', () => {
    render(<PageTitle subtitle="test" />);

    const subTitle = screen.getByText('test');
    expect(subTitle).toBeInTheDocument();
  });

  it('renders page title and subtitle', () => {
    render(<PageTitle title="Home" subtitle="test" />);

    const title = screen.getByText('Home');
    expect(title).toBeInTheDocument();

    const subTitle = screen.getByText('test');
    expect(subTitle).toBeInTheDocument();
  });
});
