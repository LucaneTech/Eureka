interface ActualitieCardProps {
    title: string;
    description: string;
    imageUrl: string;
    date: string;
  
}

const ActualitieCard: React.FC<ActualitieCardProps> = ({ title, description, imageUrl, date }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden scale-90 borderMainColor max-h-[400px] w-full h-auto">
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full h-36 object-cover" loading = "lazy" />
                <div className="absolute top-2 right-2 bgMainColor text-white text-xs px-2 py-1 rounded">{date}</div>
             
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 mainColor">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{date}</p>
                <p className="text-gray-800 mb-4">{description}</p>
            </div>
        </div>
    );
}

export default ActualitieCard;