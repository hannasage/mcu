import { render, screen } from "@testing-library/react"
import MovieTable from "./MovieTable"

describe('MovieTable.tsx', () => {

    test('table header renders', () => {
        render(<MovieTable />)
        const header = screen.getByText("Release Order")
        expect(header).not.toBeNull
    })

})