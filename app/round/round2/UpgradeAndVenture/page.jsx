'use client'
import { useState, useEffect } from "react";

const UpgradeAndVenture = () => {
    // Initial time set to 30 minutes (1800 seconds) or get from local storage
    const initialTime = parseInt(localStorage.getItem("timer")) || 30 * 60;
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        // Save the timer to local storage whenever it changes
        localStorage.setItem("timer", time);

        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup the interval
        } else {
            // Clear the timer from local storage if it reaches zero
            localStorage.removeItem("timer");
        }
    }, [time]);

    // Convert seconds to MM:SS format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const upgradeVals = [
        { "Capital Restructuring": "In the context of our game D/E ratio simplg refers to Debt / Equity . Higher Ratio ie. More than 1 indicates that the company in acquired more debt" },
        { "Campaigning": "Campaign in general refers to Marketing , Branding and Sales Promotion . This Results in increasing impressions and footfall of the company." },
        { "Expansion and Innovation": " Expansion and Innovation ensures  'Economies of Scale' with efficient and feasible technology, thus increasing profitability." }
    ];

    const ventureVals = [{"very high risk":[{ "Polaris and Zero Motorcycles": "The Polaris and Zero Motorcycles venture encounters various challenges, primarily due to the dynamic nature of the electric vehicle market, characterized by changing consumer preferences and competitive pressures. Merging Polaris's traditional powersports expertise with Zero's electric technology presents integration hurdles, while regulatory changes and substantial investment requirements introduce additional complexities for the partnership. However if the venture turns out to be successful , it has the potential to disrupt the industry . "},
        { "Molson Coors and SABMiller" :"The Molson Coors a Pharmaceutical company and SABMiller an FMCG Company have joined hands to produce a vitamin rich soft drink . This venture faces several challenges, including market saturation and shifting consumer preferences towards healthier beverages. It must navigate substantial regulatory scrutiny and the complexities of integrating diverse corporate cultures. Additionally, the high debt levels incurred during the acquisition could lead to uncertainty and financial pressure for the combined entity. However , if the product line becomes successful , it can be a breakthrough ."}]}
        ,
        {"high risk":[{ "BMW and Brilliance Auto Group": "The BMW and Brilliance Auto Group joint venture faces several challenges, including potential regulatory changes in China and fluctuating consumer demand. Additionally, competition from domestic manufacturers and the complexities of integrating different corporate cultures may affect operations. The reliance on a single market for growth adds further considerations for profitability and stability . However , the success of this venture will lead to efficient cost cutting and decrease in production costs."},
            {"Flexfit": "Flexit is a joint venture between Adidas, a prominent global sportswear brand, and Genomatica, a biotechnology company focused on sustainable materials. This initiative aims to develop eco-friendly footwear solutions using renewable resources. The growing consumer demand for sustainable products, coupled with strong support from both companies, fosters a commitment to innovation and market stability. Also this market is not new to the customers since such shoes are being imported from the global markets at a high scale . Thus , product responsiveness is expected to be positive."}]},
        {"medium risk":[{ "Apollo and GlaxoSmithKline":"The Apollo and GlaxoSmithKline joint venture involves the intricate integration of healthcare technology and pharmaceutical development. Although both companies contribute valuable expertise, they face challenges from regulatory hurdles and market competition. Nonetheless, their combined strengths in data and research present opportunities for meaningful advancements in health solutions. This venture is most likely expected to bring a huge revolution in the generic medicine market , by bringing affordable medicines to the underprivileged sector."},
            {"Goldwinner Oil and Homeware Containers": "The joint venture between the Saffola Oil and Tupperware has joined hands to give an exclusive range of sales promotion offers the customers . They faces challenges related to market competition and differing consumer preferences across regions but both companies possess strong branding and distribution capabilities, but aligning their product offerings and navigating regulatory environments may affect growth. However, their combined strengths offer a solid foundation for success."}]},
        {"low risk":[{ "Volvo and Geely ": "The Volvo and Geely joint venture benefits from their complementary strengths and shared objectives in innovation and sustainability. Geely is a fintech company . It provides financial support to this venture  combined with Volvo's established brand and technology, enabling effective collaboration on electric vehicles and global expansion, helping to reduce competitive pressures and strengthen market resilience."},
            { "Zoeing and Martin Head":"Zoeing is aerospace company , whereas Martin is a n expert in producing defense solutions. The Boeing and Lockheed Martin partnership capitalizes on their established expertise in aerospace and defense. By combining resources and capabilities, they can harness synergies in technology development and production. Additionally, stable government contracts and a shared commitment to innovation help mitigate competitive pressures and enhance operational stability."}]},
        {"very low risk":[{ "ONGC Videsh ":"ONGC Videsh, the international arm of India’s Oil and Natural Gas Corporation, partners with foreign governments and oil companies to explore and develop oil fields globally. These ventures benefit from strong government support and long-term contracts, along with a strategic emphasis on essential energy resources, which helps create stable revenue streams and reduce exposure to market fluctuations."},
            {"Walmart and Eko": "The Walmart and Eko joint venture operates within a competitive retail landscape and depends on digital innovation. Eko provides an interactive website to the customers who wish to buy from Walmart without physically visiting the store. While challenges related to integration and consumer adoption exist, Walmart's strong brand and resources offer significant support, enhancing the potential for success through effective execution and responsiveness to market demands.The success of this Venture is based on customer response to this new feature and feasibility of the idea . Also , this venture will have face tough competition with Grocery delivery apps like , Blink It , Big Basket . " }]}
        
    ];

    return (
        <main className="w-[100vw] h-[100vh] custom-round2 bg-cover bg-no-repeat flex flex-col justify-center items-center">
            <nav className="h-[10vh] border bg-gradient-to-b rounded-3xl from-[#807DFC] to-[#461a99] border-white border-10px outline-black w-[81vw] relative top-10 z-10 shadow-xl flex justify-between items-center pl-5 pr-5">
                <div className="text-3xl font-gotham text-white">TEAM NAME</div>
                {/* Display the countdown timer in MM:SS format */}
                <div className="fit-content text-3xl font-gotham text-white">
                    {formatTime(time)}
                </div>
                <div className='flex gap-5 '>
                    <button className="font-gotham bg-gradient-to-b from-[#FFE55B] to-[#FFBE5C] rounded-xl w-[10vw] text-[#603B10]">Wallet:$$$</button>
                    <div className="w-[3vw] h-[3vw] bg-gradient-to-b from-[#FFE55B] to-[#FFBE5C] rounded-[50%]">
                        <div className="w-[3vw] h-[3vw] rounded-[50%] border border-black custom-profilelogo"></div>
                    </div>
                </div>
            </nav>

            <div className="bg-gradient-to-b from-[#FFFFFF] via-[#DAD0FF] to-[#FFFFFF] rounded-2xl w-[80vw] h-[80vh] flex flex-col gap-10 border border-black border-10px overflow-y-auto overflow-x-hidden custom-scrollbar">
                <div className="pt-16 border-5px w-full h-[80vh] rounded-2xl flex flex-col gap-12 justify-evenly items-center">
                    {/* Flex container for the first two sections */}
                    <div className="flex flex-row justify-between w-[inherit] ">
                        <div className="flex flex-col gap-5 w-[inherit]">
                            <h1 className="text-2xl text-center font-gotham text-[#363636]">UPGRADES</h1>
                            <div className="flex flex-col gap-10 w-[inherit]">
                                <div className="flex justify-around items-center ">
                                    {upgradeVals.slice(0, 2).map((item, index) => {
                                        const heading = Object.keys(item)[0];
                                        const details = item[heading];

                                        return (
                                            <div key={index} className="bg-[#443F78] w-[24vw] h-[25vh] rounded-xl ">
                                                <div className="mt-1 m-1.5 flex flex-col justify-around items-center ">
                                                    <h2 className="bg-[#E2DCFE] rounded-xl rounded-b-none w-full leading-[6vh] font-bold text-center font-gotham text-[#363636]">{heading}</h2>
                                                    <p className="font-mono text-white text-sm text-center h-[12vh] pt-2">{details}</p>
                                                    <button className="pb-1 rounded-xl bg-[#E2DCFE] font-gotham w-[7vw] h-[5vh] text-center text-[#443f78] hover:scale-110 active:scale-100 transition-all ease-in-out ">Buy Now</button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center items-center">
                                    {upgradeVals.slice(2, 3).map((item, index) => {
                                        const heading = Object.keys(item)[0];
                                        const details = item[heading];

                                        return (
                                            <div key={index} className="bg-[#443F78] w-[24vw] h-[25vh] rounded-xl ">
                                                <div className="mt-1 m-1.5 flex flex-col justify-around items-center ">
                                                    <h2 className="bg-[#E2DCFE] rounded-xl rounded-b-none w-full leading-[6vh] font-bold text-center font-gotham text-[#363636]">{heading}</h2>
                                                    <p className="font-mono text-white text-sm text-center h-[12vh] pt-2">{details}</p>
                                                    <button className="rounded-xl bg-[#E2DCFE] font-gotham w-[7vw] h-[5vh] text-center text-[#443f78] hover:scale-110 active:scale-100 transition-all ease-in-out">Buy Now</button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VENTURES Section */}
                    <div className="flex flex-col gap-5">
                        <h1 className="text-2xl text-center font-gotham text-[#363636]">VENTURES</h1>
                        <div className="flex flex-col gap-4 w-full">
                            {ventureVals.map((items, index) => {
                                const risk = Object.keys(items)[0]; // Assuming "very high risk" is at index 0

                                // Extract the first object under "very high risk"
                                const firstVenture = items[risk][0]; // Access the first venture under "very high risk"
                                const secondVenture = items[risk][1]; // Access the second venture
                                
                                // Get the keys (headings) of the ventures
                                const opt1head = Object.keys(firstVenture)[0]; // "Polaris and Zero Motorcycles"
                                const opt2head = Object.keys(secondVenture)[0]; // "BMW and Brilliance Auto Group"
                                
                                // Get the values (descriptions) of the ventures
                                const opt1 = firstVenture[opt1head]; // Description for "Polaris and Zero Motorcycles"
                                const opt2 = secondVenture[opt2head]; // Description for "BMW and Brilliance Auto Group"
                                

                                return (
                                    <div key={index} className="flex justify-around items-center gap-[10vw] w-full p-4 rounded-lg">
                                        <div key={index} className="bg-[#443F78] w-[24vw] h-[25vh] rounded-xl ">
                                            <div className="mt-1 m-1.5 flex flex-col justify-around items-center ">
                                                <h2 className="bg-[#E2DCFE] rounded-xl rounded-b-none border border-black w-full leading-[6vh] font-bold text-center font-gotham text-[#363636]">{opt1head}</h2>
                                                <p className="font-mono text-white text-sm text-center h-[12vh] pt-2 mb-2 overflow-y-auto custom-scrollbar">{opt1}</p>
                                                <button className="rounded-xl bg-[#E2DCFE] font-gotham w-[7vw] h-[5vh] text-center text-[#443f78] hover:scale-110 active:scale-100 transition-all ease-in-out">Buy Now</button>
                                            </div>
                                        </div>
                                        <div key={index} className="bg-[#443F78] w-[24vw] h-[25vh] rounded-xl ">
                                            <div className="mt-1 m-1.5 flex flex-col justify-around items-center ">
                                                <h2 className="bg-[#E2DCFE] rounded-xl rounded-b-none border border-black w-full leading-[6vh] font-bold text-center font-gotham text-[#363636] ">{opt2head}</h2>
                                                <p className="font-mono text-white text-sm text-center h-[12vh] pt-2 mb-2 overflow-y-auto custom-scrollbar">{opt2}</p>
                                                <button className="rounded-xl bg-[#E2DCFE] font-gotham w-[7vw] h-[5vh] text-center text-[#443f78] hover:scale-110 active:scale-100 transition-all ease-in-out">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UpgradeAndVenture;
