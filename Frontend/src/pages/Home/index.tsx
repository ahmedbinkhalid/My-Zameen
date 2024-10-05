import React from 'react';
import { Header } from '../../components/atoms/Header';
import BuyRent from '../../components/molecules/BuyRent';
import { InvestWanted } from '../../components/organism/InvestWanted';
import { BuySellRent } from '../../components/molecules/BuySellRent';
import { AreaGuidesMain } from '../../components/molecules/AreaGuidesMain';
import { SignInForm } from '../../components/organism/SignInForm';
import { SignUpForm } from '../../components/organism/SignUpForm';


export const Home = () => {
  return (
    <>
    {/* <Header />
    <BuyRent />
    <InvestWanted />
    <BuySellRent />
    <AreaGuidesMain /> */}
    {/* <SignInForm /> */}
    <SignUpForm />
    </>
  );
}
