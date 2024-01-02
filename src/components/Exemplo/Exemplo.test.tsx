import { render, screen } from '@testing-library/react'

import { Exemplo } from '.'

describe('<Exemplo />', () => {
  it('should render the heading', () => {
    const { container } = render(<Exemplo />)

    expect(
      screen.getByRole('heading', { name: /Exemplo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
