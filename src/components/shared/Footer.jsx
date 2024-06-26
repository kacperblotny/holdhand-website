import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo/Logo-02.png'
import ContactForm from './ContactForm'

import discord from '../../assets/svg/discord.svg'
import linkedin from '../../assets/svg/linkedin.svg'

import useTranslationHook from '../../hooks/useTranslationHook'

function Footer() {
  const { t, changeLanguage } = useTranslationHook()
  return (
    <div className='bg-footer-gradient ' id='contact'>
      <div className=''>
        <div className='container max-w-[1280px] mx-auto'>
          <ContactForm />
        </div>
        <div className='bg-white w-screen h-[1px] my-8'></div>
        <div className='container max-w-[1280px] mx-auto px-4'>
          <div className='text-white flex flex-col lg:flex-row gap-16 py-8'>
            <img src={logo} alt='logo' className='h-[40px] w-fit' />
            <div className='flex flex-col lg:flex-row gap-16'>
              <div className='flex gap-16'>
                <div>
                  <p className='font-bold'>HOLDHAND sp. z o.o.</p>
                  <p className='text-mainHover'>{t('footer.address')}</p>
                </div>
                <div>
                  <p>NIP: 7123467590</p>
                  <p>REGON: 527332599</p>
                </div>
              </div>
              <div className='flex gap-16'>
                <div>
                  <p className='font-bold'>HOLDHAND APT sp. z o.o.</p>
                  <p className='text-mainHover'>{t('footer.address')}</p>
                </div>
                <div>
                  <p>NIP: 7123476784</p>
                  <p>REGON: 528885290</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col-reverse sm:flex-row justify-between'>
            <div className='flex flex-col lg:flex-row gap-8 py-8'>
              <p className='text-mainHover'>{t('footer.copy')}</p>
              <Link to='/privacy-policy'>
                <p className='cursor-pointer text-mainHover hover:text-white duration-300 transition-color'>
                  Polityka prywatności
                </p>
              </Link>
            </div>
            <div className='flex flex-col md:flex-row gap-8 p-8'>
              <p className='text-white text-4xl w-fit mx-auto'>
                office@holdhand.eu
              </p>
              <div className='flex justify-evenly gap-8'>
                <a
                  class='flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 overflow-hidden transition duration-300 ease-in-out hover:bg-blue-200 cursor-pointer'
                  href='https://discord.gg/wbeVNTC7dy'
                  target='_blank'
                >
                  <img src={discord} alt='discord' />
                </a>
                <a
                  class='flex items-center justify-center h-12 w-12 rounded-full border border-gray-300 overflow-hidden transition duration-300 ease-in-out hover:bg-blue-200 cursor-pointer'
                  href='https://www.linkedin.com/company/holdhand/'
                  target='_blank'
                >
                  <img src={linkedin} alt='linkedin' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
