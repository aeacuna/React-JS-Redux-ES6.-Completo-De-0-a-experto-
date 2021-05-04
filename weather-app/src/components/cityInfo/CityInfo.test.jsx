import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under testing

test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Buenos Aires"
    const country = "Argentina"
    const { findAllByRole } = render(<CityInfo city="Buenos Aires" country="Argentina" />)
    // Assert 
    const cityAndCountryComponent = await findAllByRole("heading")

    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})