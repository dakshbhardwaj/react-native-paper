import { render } from '@testing-library/react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';
import Searchbar from '../Searchbar.tsx';

it('renders with placeholder', () => {
  const tree = renderer.create(<Searchbar placeholder="Search" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders with text', () => {
  const tree = renderer
    .create(<Searchbar placeholder="Search" value="query" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('activity indicator snapshot test', () => {
  const tree = renderer.create(<Searchbar loading={true} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders with ActivityIndicator', () => {
  const tree = render(
    <Searchbar
      loading={true}
      loaderStyle={{ testID: 'withActivityIndicator' }}
    />
  );

  expect(tree.getByTestId('withActivityIndicator')).toBeTruthy();
});

it('renders without ActivityIndicator', () => {
  const tree = render(
    <Searchbar
      loading={false}
      loaderStyle={{ testID: 'withOutActivityIndicator' }}
    />
  );

  expect(() => tree.getByTestId('withOutActivityIndicator')).toThrow();
});
