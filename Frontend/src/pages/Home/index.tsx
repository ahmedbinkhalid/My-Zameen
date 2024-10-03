import React from 'react';
import { Header } from '../../components/atoms/Header';
import BuyRent from '../../components/molecules/BuyRent';
import { InvestWanted } from '../../components/organism/InvestWanted';
import { BuySellRent } from '../../components/molecules/BuySellRent';

export const Home = () => {
  return (
    <>
    <Header />
    <BuyRent />
    <InvestWanted />
    <BuySellRent />
    </>
  );
}
