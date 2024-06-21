import { touristyPlaces
 } from "./components/constants/touristy-places"
 import { useEffect, useState } from "react"
 import Modal from "./components/Modal"
 import TouristicCard from "./components/TouristicCard"
import MapIframe from "./components/MapIframe"
import Search from "./components/Search"

const App = () => {
  const [open, setOpen] = useState(false)
  const [openMap, setOpenMap] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState(
    {
      location: "",
      country: "",
      description: "",
      image: "",
      date: "",
      googleMap: "",
      id: "",
      name: ""
    }
  )
  const openModal = (id: string) => {
    const place = touristyPlaces.find((place) => place.id === id)
    if (place) {
      setSelectedPlace(place)
      setOpen(true)
    }
  }
  const closeModal = () => {
    setOpen(false)
  }
  const openGoogleMap = (id: string) => {
    const place = touristyPlaces.find((place) => place.id === id)
    if (place) {
      setSelectedPlace(place)
      setOpenMap(true)
    }
  }
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])
  const onMapClose = () => {
    setOpenMap(false)
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])
  const [searchTerm, setSearchTerm] = useState("")
  const search = (term: string) => {
    setSearchTerm(term)
  }
  const [searchResults, setSearchResults] = useState(touristyPlaces)
  useEffect(() => {
    const results = touristyPlaces.filter((place) =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm,setSearchResults])
  return (
    <div>
      <h1 className="text-3xl font-semibold bg-red-500 text-white text-center p-4">My Touristy Places</h1>
      <div className="mt-4 container mx-auto flex items-center justify-between gap-4">
      <Search search={search} searchTerm={searchTerm} />
      {
        searchResults.length === 0 && <p className="text-center text-lg text-gray-700">Oops! No places found</p>
      }
      {
        (searchResults.length > 0&&searchTerm!=='') && <p className="text-center text-lg text-gray-700">Found {searchResults.length} places</p>
      }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {searchResults.map((touristyPlace) => (
          <TouristicCard
            open={openModal}
            key={touristyPlace.id}
            title={touristyPlace.name}
            description={touristyPlace.description}
            image={touristyPlace.image}
            date={touristyPlace.date}
            location={touristyPlace.location}
            country={touristyPlace.country}
            googleMap={touristyPlace.googleMap}
            id={touristyPlace.id}
            name={touristyPlace.name}
            openGoogleMap={openGoogleMap}

          />
        ))}
      </div>
      {
        open && (
          <Modal
            open={open}
            onClose={closeModal}
            title={selectedPlace.name}
            description={selectedPlace.description}
            image={selectedPlace.image}
            date={selectedPlace.date}
            location={selectedPlace.location}
            country={selectedPlace.country}
            googleMap={selectedPlace.googleMap}
            id={selectedPlace.id}
            name={selectedPlace.name}

            
          /> 
         
        )
      }
      {
        openMap && (
          <MapIframe
            src={selectedPlace.googleMap}
            onClose={onMapClose}
           
          />
        )
      }
    </div>
  )
}

export default App