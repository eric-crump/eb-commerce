
export default function HeroBanner({banner}){
    console.log('banner', banner);
    let style = {}
    let imageClass = ""
    let themeColor = ""
    let theme = '';
    let button;

    if(banner.image_style === "Full" || banner.layout === "Center"){
        if(banner.image){
            style = {
                '--image-url': `url(${banner.image.url})`,
            }
            imageClass = "bg-[image:var(--image-url)] bg-cover bg-center ";
        }
    }

    if(banner.theme === "Light"){
        themeColor = "text-black" ;
        theme = 'bg-white';
    }
    else{
        themeColor = "text-white"
        if(banner.image_style !== "Full")
            theme = 'bg-slate-800';
    }

    if(banner.button.title !== ''){
        let margin = "";
        if(banner.layout === "Text Left")
            margin = "mr-auto";
        else if(banner.layout === "Text Right")
            margin = "ml-auto";
        if(banner.theme === "Light"){
            button = 
                <button className={"mt-3 bg-transparent text-black font-semibold hover:text-slate-600 py-2 px-4 border border-black hover:border-slate-600 rounded " + margin}>
                    {banner.button?.title}
                </button>
        }
        else{
            button = 
                <button className={"mt-3 bg-transparent text-white font-semibold hover:text-slate-200 py-2 px-4 border border-white hover:border-slate-200 rounded " + margin}>
                    {banner.button?.title}
                </button>
        }
    }

    let hero;
    if(banner.layout === "Center"){
        hero = 
            <div style={style} className={"h-[500px] flex " + imageClass} >
                <div className="my-auto mx-auto content-center">
                    <div className="text-center">
                        <p className={"text-6xl font-bold " + themeColor }>{banner.headline}</p>
                        <p className={"text-2xl mt-2 " + themeColor }>{banner.subtext}</p>
                        {button}
                    </div>
                </div>
            </div>
    }
    else if(banner.layout === "Text Left"){
        let img;
        if(banner.image_style === "Half")
            img = <img src={banner.image?.url} className="h-[500px] object-cover p-12" />
        hero = 
            <div className={"flex h-[500px] " + imageClass + " " + theme} style={style}>
                <div className="my-auto pl-12 ">
                    <div className="grid grid-cols-2  place-items-start">
                        <div className="flex flex-col my-auto">
                            <p className={"text-6xl font-bold " + themeColor }>{banner.headline}</p>
                            <p className={"text-2xl mt-2 " + themeColor }>{banner.subtext}</p>
                            {button}
                        </div>
                        <div>
                            {img}
                        </div>
                    </div>
                </div>
            </div>
    }
    else if(banner.layout === "Text Right"){
        let img;
        if(banner.image_style === "Half")
            img = <img src={banner.image?.url} className="h-[500px] object-cover p-12" />
        hero = 
            <div className={"flex h-[500px] " + imageClass + " " + theme} style={style}>
                <div className="my-auto w-full pr-12 ">
                    <div className="grid grid-cols-2  place-items-end">
                        <div>
                            {img}
                        </div>
                        <div className="flex flex-col my-auto text-right">
                            <p className={"text-6xl font-bold " + themeColor }>{banner.headline}</p>
                            <p className={"text-2xl mt-2 " + themeColor }>{banner.subtext}</p>
                            {button}
                        </div>
                    </div>
                </div>
            </div>
    }

    return(
        <div>
            {hero}
        </div>
    )
}