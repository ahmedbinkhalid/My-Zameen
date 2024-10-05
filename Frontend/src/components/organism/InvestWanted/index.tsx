import React from 'react';
import { InvestWantedCard } from '../../molecules/InvestWantedCard';

interface InvestWantedData {
    path: string;
    heading: string;
    data: string;
    btnData: string;
}

export const InvestWanted = () => {
    const investWantedData : InvestWantedData[] = [
        {
            path : "https://www.graana.com/_next/image/?url=%2Fhome-page-images%2Finvest.png&w=640&q=75",
            heading : "Invest",
            data : "Invest in fully legal Imarat projects. Our “Ownerships & Approvals, Demand & Delivery” approach ensures fantastic returns with full risk mitigation",
            btnData : "Invest Now"
        },
        {
            path : "https://www.graana.com/_next/image/?url=%2Fhome-page-images%2F3ClicksLogo.png&w=640&q=75",
            heading : "Wanted",
            data : "In just 3 clicks activate a team of experts to find the properties you need",
            btnData : "Wanted"
        }
    ]
  return (

    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
         {
                investWantedData.map((objData, index) => (
                     <InvestWantedCard 
                         key={index}
                         path={objData.path}
                         heading={objData.heading}
                         data={objData.data}
                         btnData = {objData.btnData}
                     />
                 ))
             }
</section>

  )
}
