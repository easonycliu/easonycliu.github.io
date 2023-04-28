import React from "react";
import { useParams } from "react-router-dom";
import { getBooksById } from "../services/BookServices";

export default function BookDetail() {
    const { id } = useParams();
    const info = getBooksById(id);
    return (
        <div className="bigbox">
            <input id="BookViewInput"/>
            <div className="clearfix">
                <div id="Book">
                    <img id="BookViewImage" src={info.image} alt="img"/>
                    <div id="BookInfo">
                        <div id="BookViewName">{info.name}</div>
                        <div id="BookViewAuthor">{info.author}</div>
                        <div id="BookViewPrice">$ {info.price}</div>
                        <div id="BookViewDiscribe">{info.discribe}</div>
                    </div>
                    <div id="ButtonsHolder">
                        <button className="BookViewButton">Add To Cart</button>
                        <button className="BookViewButton">Order Now</button>
                    </div>
                    <div id="BookViewDiscribe">
                        While Muggles are busy going about their daily business, we start the magic!
 
                        A description of all known spells from the world of Harry Potter.
                        Illustrations of the movement of the magic wand and the rules of pronunciation.
                        Mentions of scenes from movies or books where the spell was applied. There are illustrations for some scenes.
                        Funny tips for using charms in everyday life.
 
                        Unofficial Harry Potter Spellbook is a luxurious magical guide for kids and adults, which contains a thorough description of all the famous spells used in films, books, video games about Harry Potter and in the Fantastic Beasts franchise.
 
                        Spells are conveniently sorted and include pronunciation rules, classification, wand movement, and a description of the result obtained. Also added facts, origin stories, and fun tips related to spells. All for wizard training!
 
                        This illustrated collectible book with beautiful design will serve as a gift for fans of the magic and secrets of the Harry Potter universe!
 
                        Disclaimer: This guide is an unofficial version and is not endorsed by or affiliated with the author of the Harry Potter book series or its licensors.
                    </div>
                </div>
            </div>
        </div>
    );
}