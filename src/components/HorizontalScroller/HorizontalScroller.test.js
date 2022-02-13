import{ render, screen } from '@testing-library/react'
import {HorizontalScroller} from './HorizontalScroller'

describe('<HorizontalScroller />', () => {
    it('should render any children within the Horizontal Scroller', () => {
        render(<HorizontalScroller>
            <p>This is a child</p>
        </HorizontalScroller>)
        expect(screen.getByText('This is a child')).toBeInTheDocument()
    })
})