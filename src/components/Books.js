import React, { useState } from "react";
import BooksData from "./BooksData";
import { useSelector } from "react-redux";

const Books = () => {

    const language = useSelector(state => state.language);
    const dictionary = useSelector(state => state.dictionary);
    const [currBook, setCurrBook] = useState(0);

    const nextSlide = () => {
        setCurrBook(currBook === BooksData.length - 1 ? 0 : currBook + 1);
    }
    const prevSlide = () => {
        setCurrBook(currBook === 0 ? BooksData.length - 1 : currBook - 1);
    }

    return (
        <section id="books" data-aos="fade-up">
            <h3 className="section-name" data-aos="fade-up">{dictionary[language]["readed_books"]}</h3>
            <div className="slider">
                <a href={BooksData[currBook].link} target="blank">
                    <img src={BooksData[currBook].src} />
                </a>
                <img src="images/arrow-right.png" className="arrow right" onClick={nextSlide} />
                <img src="images/arrow-right.png" className="arrow left" onClick={prevSlide} />
            </div>
            <div className="text">
                <h3>{language === "pl" ? BooksData[currBook].name : BooksData[currBook].en_name}</h3>
                <p>{language === "pl" ? BooksData[currBook].description : BooksData[currBook].en_description}</p>
            </div>
        </section>
    )
}

export default Books; 