
export default function Offers({offers}) {
    return (
        <nav aria-label="Offers" className="order-last lg:order-first">
            <div className="mx-auto max-w-7xl lg:px-8">
                <ul
                    role="list"
                    className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
                >
                    {offers?.map((offer) => (
                        <li key={offer.detail} className="flex flex-col" {...offer.$?.detail}>
                            <a
                                href="#"
                                className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                            >
                                <p className="text-sm text-gray-500">{offer.detail}</p>
                                <p className="font-semibold text-gray-900">{offer.headline}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}