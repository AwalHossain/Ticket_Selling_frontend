import { useRef, useState } from "react";
import MediumCard from "../ui/MediumCard";
import SmallerCard from "../ui/SmallerCard";

const HomePage = () => {
    const cards = [
        {
            title: "Card 1",
            content: "Content for Card 1",
            img: "https://links.papareact.com/4cj",
        },
        {
            title: "Card 2",
            content: "Content for Card 2",
            img: "https://links.papareact.com/4cj",
        },
        {
            title: "Card 3",
            content: "Content for Card 3",
            img: "https://links.papareact.com/4cj",
        },
        {
            title: "Card 4",
            content: "Content for Card 3",
            img: "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnascar-cup-series-1-737f19%2F607605%2F1500x2000.jpg&w=1920&q=75",
        },
        {
            title: "Card 5",
            content: "Content for Card 3",
            img: "https://links.papareact.com/4cj",
        },
        {
            title: "Card 6",
            content: "Content for Card 3",
            img: "https://seatgeek.com/_next/image?url=https://seatgeek.com/images/performers-landscape/billy-joel-4c8b8c/303/48574/1100x700.jpg&w=1080&q=75&v=2",
        },
        {
            title: "Card 7",
            content: "Content for Card 3",
            img: "https://links.papareact.com/4cjse",
        },

        // Add more cards as needed
    ];

    // const [currentIndex, setCurrentIndex] = useState(0);
    // const cardWidth = 300; // Adjust the card width as needed

    // const nextCard = () => {
    //     const numCards = Math.floor(window.innerWidth / cardWidth);
    //     if (currentIndex + numCards < cards.length) {
    //         setCurrentIndex(currentIndex + numCards);
    //     }
    // };

    // const prevCard = () => {
    //     const numCards = Math.floor(window.innerWidth / cardWidth);
    //     if (currentIndex > 0) {
    //         setCurrentIndex(currentIndex - numCards);
    //     }
    // };

    //scroll button fucntion
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to scroll to the next set of cards
    // Function to scroll to the next set of cards
    const nextCard = () => {
        if (cardContainerRef.current) {
            const maxIndex = cards.length - 1;
            const nextIndex = currentIndex + 1;
            if (nextIndex <= maxIndex) {
                setCurrentIndex(nextIndex);
                cardContainerRef.current.scrollLeft += 1200;
            }
        }
    };


    // Function to scroll to the previous set of cards
    const prevCard = () => {
        if (cardContainerRef.current) {
            const prevIndex = currentIndex - 1;
            if (prevIndex >= 0) {
                setCurrentIndex(prevIndex);
                cardContainerRef.current.scrollLeft -= 1200;
            }
        }
    };

    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex === cards.length - 1;
    const prevButtonClasses = `opacity-${isPrevDisabled ? "0" : "100"}`;
    const nextButtonClasses = `opacity-${isNextDisabled ? "0" : "100"}`;
    const startCardIndex = currentIndex + 1;
    const endCardIndex = Math.min(currentIndex + 3, cards.length);
    const cardRange = `${startCardIndex}-${endCardIndex} out of ${cards.length}`;

    return (
        <div className="">
            <div className=" container flex justify-center items-center align-middle">
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 px-5">
                    <SmallerCard />
                </div>
            </div>
            <section>
                <div>
                    <div className="flex justify-between align-middle items-center mx-10">
                        <h2 className="text-2xl font-semibold ">Sports</h2>
                        <div>

                            {/* shadow button hover and transition */}
                            <div className="bg-white rounded-3xl text-black flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 hover:border-blue-500">
                                <button onClick={prevCard}
                                    disabled={isPrevDisabled}
                                    className={prevButtonClasses}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isPrevDisabled ? "opacity-50" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <span>{cardRange}</span>
                                <button className={nextButtonClasses} onClick={nextCard} disabled={isNextDisabled}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isNextDisabled ? "opacity-50" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="">

                        <div id="cardcontainer"
                            ref={cardContainerRef}
                            className="flex pl-14 space-x-5 overflow-scroll scrollbar-hide p-3 -ml-4 scroll-smooth"
                        >
                            {cards.map((card, index) => (
                                <div key={index} className="">
                                    <MediumCard title={card.title} content={card.content} img={card.img} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default HomePage;