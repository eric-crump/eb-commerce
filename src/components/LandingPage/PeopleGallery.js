
export default function PeopleGallery({ people }) {
    let products = people?.people.products;
    let peopleList = []

    products?.forEach(item => {
        peopleList.push(
            {
                name: item.name,
                role: item.title,
                imageUrl: item.img
            }
        )
    })

    return (
        <div className="bg-[#343837] py-24 sm:py-32 mb-8" {...people?.$?.title}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{people.title}</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        {people.description}
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
                >
                    {peopleList.map((person) => (
                        <li key={person.name}>
                            <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-300">{person.role}</p>
                            <p className="text-sm leading-6 text-gray-500">{person.location}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}