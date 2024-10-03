interface data {
    imagePath : string;
    heading : string;
    mainData : string;
    btnData : string;
}

export const BuySellRentData : data[] = [
    {
        imagePath : "https://www.graana.com/home-page-images/buy.svg",
        heading : "Buy a property",
        mainData : 'Find where “perfect” meets “happy” ',
        btnData : "Browse properties"
    },

    {
        imagePath : "https://www.graana.com/home-page-images/sell.svg",
        heading : "Sell a property",
        mainData : "Get the best value in any economy",
        btnData : "add details"
    },

    {
        imagePath : "https://www.graana.com/home-page-images/rent.svg",
        heading : "Rent a property",
        mainData : "Live where you can love",
        btnData : "find rentals"
    }
];