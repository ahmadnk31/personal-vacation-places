
import { AnimatePresence,motion } from 'framer-motion'
import { TbMapPin } from 'react-icons/tb'
const Modal = ({
    
    open,
    onClose,
    title,
    description,
    image,
    date,
    location,
    country,
    
    id,
    
    }: {
       
        open: boolean
        onClose: () => void
        title: string
        description: string
        image: string
        date: string
        location: string
        country: string
        googleMap: string
        id: string
        name: string
}) => {
  return (
    <div>
        <AnimatePresence 
        mode='wait'

        >
        {open && (
            <AnimatePresence>
                <motion.div
            key={id}
            

            initial={{ opacity: 0,scale:2 }}
            animate={{ opacity: 1, scale:1}}
            exit={{ opacity: 0, scale:0.5, transition: { duration: 0.1 }}}
            transition={{ duration: 0.1, type: 'keyframe'}}
             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div 
           
            className="bg-white overflow-hidden rounded-lg w-2/4 max-md:w-3/4 overflow-y-auto h-[90%] max-sm:h-auto max-sm:my-8">
                <button title='open' onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
                <img className="w-full h-4/6 object-cover" src={image} alt="touristic place" />
                <div className="p-4">
                <span className="flex items-center gap-2 text-gray-600">
                    <TbMapPin color='red' />
                    {location}, {country}
                </span>
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                <p className="text-sm font-medium text-gray-600">{description}</p>
                <div className="flex items-center mt-4">
                    
                    <span className="text-sm font-medium text-gray-600 ml-auto text-balance text-clip">{date}</span>
                </div>
                </div>
            </div>
            </motion.div>
            </AnimatePresence>
        )}
       
        </AnimatePresence>
    </div>
  )
}

export default Modal