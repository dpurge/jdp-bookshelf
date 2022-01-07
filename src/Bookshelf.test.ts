import {render} from '@testing-library/svelte';
import {expect} from 'chai';

import Bookshelf from './Bookshelf.svelte';

describe('<Bookshelf>', () => {
  it('renders book link', () => {
    const {getByText} = render(Bookshelf);
    const linkElement = getByText(/Book/i);
    expect(document.body.contains(linkElement));
  });
});