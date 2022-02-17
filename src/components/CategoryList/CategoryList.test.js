import{ render, screen } from '@testing-library/react'
import {CategoryList} from './CategoryList'

describe('<CatergoryList />', () => {
    it('should render any children', () => {
        render(<CategoryList>
            <p>This is a child</p>
        </CategoryList>)
        expect(screen.getByText('This is a child')).toBeInTheDocument()
    })
})