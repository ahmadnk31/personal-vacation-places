
import {TbMapPin } from 'react-icons/tb'

type TouristicCardProps = {
    title: string
    description: string
    image: string
    date: string
    location: string
    country: string
    googleMap: string
    id: string
    name: string,
    open:(id:string)=>void,
    openGoogleMap:(id:string)=>void

}
const TouristicCard = ({
    title,
    description,
    image,
    date,
    location,
    country,
    
    id,
    
    open,
    openGoogleMap
    }:TouristicCardProps) => {
    return (
       
        <div
            className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer
            hover:shadow-lg transition-shadow duration-300 ease-in-out
            "
            onClick={() => {
                
                open(id)}}
        >
            <img className="w-full h-56 object-cover" src={image} alt="touristic place" />
            <div className="p-4">
                <span className="flex items-center gap-2 text-gray-600">
                    <TbMapPin color='red' />
                    {location}, {country}
                </span>
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                <p className="text-sm font-medium text-gray-600">{description}</p>
                <div className="flex items-center mt-4 justify-between">
                    
                    <a
                        className="text-primary underline-offset-4 relative hover:underline"
                        onClick={(e) => {
                            e.stopPropagation()
                            openGoogleMap(id)}}
                    >
                        View on Google Maps
                    </a>
                    <span className="text-gray-600">{date}</span>
                </div>
            </div>
        </div>
       
    )

}

export default TouristicCard