import Header from './components/Header'
import Offers from './components/Offers'
import Hero from './components/Hero'
import TrendingProducts from './components/TrendingProducts'
import Collections from './components/Collections'
import Sale from './components/Sale'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Stack , {onEntryChange} from "./cstack";
import { useState, useEffect } from 'react';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [entry, setEntry] = useState({});
    

    const getContent = async () => {
        const entry = await Stack.getElementWithRefs('blt5c7f514cec01c168', 'homepage', ['modular_blocks.sale_banner.banner', 'modular_blocks.collections.collection.page']);
        console.log(entry)
        setEntry(entry);
    } 

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    let blocks = [];
    entry?.modular_blocks?.forEach(block => {
        if(block.hasOwnProperty('product_banner')){
            blocks.push(<TrendingProducts products={block.product_banner} />);
        }
        else if(block.hasOwnProperty('collections')){
            blocks.push(<Collections collections={block.collections} />);
        }
        else if(block.hasOwnProperty('sale_banner')){
            blocks.push(<Sale banner={block.sale_banner.banner[0]} />);
        }
        else if(block.hasOwnProperty('testimonials')){
            blocks.push(<Testimonials content={block.testimonials} />);
        }
    });

    return (
        <div className="bg-white">
            <Header />
            <Offers offers={entry.offers}/>

            <Hero hero={entry.hero}/>

            {blocks}

            <Footer /> 

        </div>
    )
}
