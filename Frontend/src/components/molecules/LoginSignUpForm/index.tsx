import React from 'react';
import { formCreation } from './types';
import { continueWithData } from '../../atoms/ContinueWithButton/constants';
import { ContinueWithButton } from '../../atoms/ContinueWithButton';
import { InvestWantedButton } from '../../atoms/InvestWantedButton';
import { PasswordButton } from '../../atoms/PasswordButton';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SignInEmailInput } from '../../atoms/SignInEmailInput';

export const LoginSignUpForm : React.FC <formCreation> = ({mainHeading, mainData, lastText, btnText}) => {
  return (
    <form action='' className='flex flex-col justify-between items-center bg-transparent shadow-xl rounded-xl w-auto p-4 gap-5 lg:px-16 absolute ml-5 text-base font-semibold font-sans text-[#37474F]'> 
    <IoIosCloseCircleOutline size={28} className='self-end cursor-pointer'/>
    <h1 className='text-3xl self-start font-bold'> {mainHeading}</h1>
    <p className='opacity-70 self-start'> {mainData}</p>
    <SignInEmailInput />
    <PasswordButton />
    <InvestWantedButton data = {btnText} />
    
    <p className='text-red-400 cursor-pointer'> Forgot Password? </p>
    <p className='opacity-75 cursor-pointer'> OR </p>

    {
        continueWithData.map((objData, index) =>(
            <ContinueWithButton
             icon={objData.icon}
              btnLabel={objData.btnLabel}
              key={index} 
              />
        ))
    }
    <p className='underline py-4 cursor-pointer'> {lastText}  </p>
    </form>
  )
}