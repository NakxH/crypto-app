import{ render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import {Menubar} from './Menubar'

describe('<Menubar />', () => {
    it('should render navigation links', () => {
        render(<MemoryRouter><Menubar /></MemoryRouter>)
        expect(screen.getByText('Categories')).toBeInTheDocument()
        expect(screen.getByText('Menu')).toBeInTheDocument()
        expect(screen.getByText('Add')).toBeInTheDocument()
    })
})