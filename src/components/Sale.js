
export default function Sale({banner}) {
    return (
        <div className="relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
                    <img
                        src={banner.image?.url}
                        alt=""
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
            </div>

            {/* Sale */}
            <section
                aria-labelledby="sale-heading"
                className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
            >
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        {banner.headline}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
                        {banner.details}
                    </p>
                    <a
                        href="#"
                        className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-gray-800 sm:w-auto"
                    >
                        {banner.cta_text}
                    </a>
                </div>
            </section>
        </div>
    )
}