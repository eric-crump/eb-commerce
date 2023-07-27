
  
export default function TrendingProducts({products}) {

    const trendingProducts = [];

    if(trendingProducts.length === 0){
        products.products.custom.products.forEach(product => {
            trendingProducts.push(
                {
                    id: product.id,
                    name: product.name.default,
                    color: 'Black',
                    price: '$35',
                    href: '/#/pdp/' + product.id,
                    imageSrc: product.image?.absUrl,
                    imageAlt: '',
                }
            )
        })
    }

    return (
        <section aria-labelledby="trending-heading" className="bg-white">
            <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                    <h2 id="trending-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                        {products.title}
                    </h2>
                    <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        {products.cta.title}
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>

                <div className="relative mt-8">
                    <div className="relative w-full overflow-x-auto">
                        <ul
                            role="list"
                            className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                        >
                            {trendingProducts.map((product) => (
                                <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto">
                                    <div className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <h3 className="mt-1 font-semibold text-gray-900">
                                                <a href={product.href}>
                                                    <span className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 px-4 sm:hidden">
                    <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        See everything
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    )
}