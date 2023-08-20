import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '@theme/index';

import { MovieDetailsCard, MovieDetailsCardProps } from '@components/MovieDetailsCard'

describe('Component: MovieDetailsCard', () => {
  const mockProps: MovieDetailsCardProps = {
    label: 'Release Date',
    description: '2023-08-20',
    icon: 'event',
  };

  it('should render the label and description correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MovieDetailsCard {...mockProps} />
      </ThemeProvider>
    );

    const labelElement = getByText('Release Date');
    const descriptionElement = getByText('2023-08-20');

    expect(labelElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });
});
