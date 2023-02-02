import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getStarships } from "../services/sw-api"
import { Link } from "react-router-dom"

function StarshipPage() {
  const [starshipPage, setStarshipPage] = useState([])

  const location = useLocation()

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getStarships(location.state.starship.url)
      setStarshipPage(starshipData)
    }
    fetchStarshipData()
  }, [location.state.starship.url])

  return (
    <div>
      <div className="starship-details">
        {getStarships.name?
        <>
          <h2>Name: {starshipPage.name}</h2>
          <h2>Model: {starshipPage.model}</h2>
          <Link to='/'>
            Return
          </Link>
        </>
        :
        <>
          <p>Loading Starship details...</p>
        </>
        }
      </div>
    </div>
  )
}

export default StarshipPage