import{ render, screen } from '@testing-library/react'
import {Card} from './Card'

describe('<Card />', () => {
    it('should render any children', () => {
        render(<Card>
            <p>This is a child</p>
        </Card>)
        expect(screen.getByText('This is a child')).toBeInTheDocument()
    })
})