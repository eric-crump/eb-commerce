


export default function Collections({ collections }) {

    const collectionList = [];

    if(collectionList.length === 0){
        let url = '#';
        collections.collection.forEach(collection => {
            console.log('page', collection.page);
            url = collection.page.length > 0 ? collection.page[0].url : '#';
            collectionList.push(
                {
                    name: collection.title,
                    imageSrc: collection.image?.url,
                    imageAlt: '',
                    href: url
                }
            )
        })
    }
 
    return (
        <section aria-labelledby="collections-heading" className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 id="collections-heading" className="text-2xl font-bold text-gray-900">
                        {collections.title}
                    </h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {collectionList.map((collection) => (
                            <div key={collection.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={collection.imageSrc}
                                        alt={collection.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <a href={collection.href}>
                                    <p className="text-base font-semibold text-gray-900 mt-6">{collection.name}</p>
                                </a>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}