import React, { useEffect, useState } from 'react'
import Loading from "./Widgets/Loading/Loading";
import Banner from './Widgets/Banner/Banner';
import FlasheSale from './Widgets/FlashSale/FlasheSale';
import ListBook from './Widgets/ListBook/ListBook';
import { Product } from '../Network/Product';
import Footer from './Widgets/Footer/Footer';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [flashSale, setFlashSale] = useState();

  useEffect(() => {

    Product.getList().then((response) => setFlashSale(response.data));

    document.title = "Hung Store";

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!flashSale) return null;


  function shuffleArray(array) {
    let result = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  if (loading) {
    return <div className=' fixed top-1/2 left-1/2'><Loading /></div>
  }
  return (
    <div className='bg-gray-200 h-full'>
      <div className='relative top-52'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-10/12 flex items-center justify-center'>
            <div className=' flex items-center justify-center space-x-2 w-full'>
              <div className='w-8/12 relative block'>
                <Banner />
              </div>
              <div className=' space-y-2'>
                <img alt='...' src='https://img.freepik.com/free-vector/flat-world-book-day-sale-horizontal-banner-template_23-2149348033.jpg'
                  className=' cursor-pointer h-52 object-cover'
                />
                <img alt='...' src='https://img.freepik.com/free-vector/flat-world-book-day-sale-horizontal-banner-template_23-2149348033.jpg'
                  className=' cursor-pointer h-52 object-cover'
                />
              </div>
            </div>
          </div>
          <FlasheSale />
          <ListBook
            flashSale={shuffleArray(flashSale)}
          />
        </div>
        <Footer />
      </div>
    </div>
  )
}