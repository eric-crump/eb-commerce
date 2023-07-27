import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import HeroBanner from "./HeroBanner";
import PeopleGallery from "./PeopleGallery";
import Forms from "./Forms";
import Stack , {onEntryChange} from "../../cstack";
import Header from "../Header";
import Footer from "../Footer";

export default function Page({content}){
    const { title } = useParams();
    const [entry, setEntry] = useState({});

    const getContent = async () => {
        const entry = await Stack.getElementByUrl('page', '/#/page/' + title);
        console.log(entry)
        setEntry(entry);
    }

    useEffect(() => {
        onEntryChange(getContent);
    }, []);

    let blocks = [];
    entry?.modular_blocks?.forEach(item => {
        if(item.hasOwnProperty('paragraph')){
            let title;
            if(item.paragraph.title !== "")
                title = <p className="my-10 text-center text-5xl font-bold" {...item.paragraph?.$?.title}>{item.paragraph.title}</p>
            if(item.paragraph.image !== null){
                blocks.push(
                    <div className="container mx-auto px-8 mt-3 lg:max-w-screen-lg mb-8">
                        {title}
                        <img width="250" src={item.paragraph.image.url} className="mx-auto d-flex float-left pe-2 pt-1" key={item.paragraph.image?.uid} {...item.paragraph.image?.$?.url}></img>
                        <div dangerouslySetInnerHTML={{__html: item.paragraph.body}} {...item.paragraph?.$?.body}></div>
                    </div>
                );
            }
            else{
                blocks.push(
                    <div className="container mx-auto px-8 mt-3 lg:max-w-screen-lg mb-8">
                        {title}
                        <div dangerouslySetInnerHTML={{__html: item.paragraph.body}} {...item.paragraph?.$?.body}></div>
                    </div>
                )
            }
        }
        else if(item.hasOwnProperty('hero')){
            blocks.push(<HeroBanner banner={item.hero} key={item.hero._metadata?.uid}/>);
        }
        else if(item.hasOwnProperty('people')){
            
            blocks.push(<PeopleGallery people={item.people}  />)
        }
        else if(item.hasOwnProperty('form')){
            blocks.push(<Forms form={item.form.forms} />);
        }
    })

    return(
        <>
            <Header />
            {blocks}
            <Footer />
        </>
    )
}