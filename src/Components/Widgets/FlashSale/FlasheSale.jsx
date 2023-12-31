import React, { useEffect, useState } from 'react';
import BookCard from '../SaleBook/BookCard';
import CountDownTimer from './CountDownTimer';
import axios from 'axios';
import { getApiUrl } from '../../../Utils/Config/getApiUrl';
import { LoadingSale } from '../Loading/LoadingSale';

export default function FlasheSale() {

    const [flashSale, setFlashSale] = useState(null);

    useEffect(() => {

        axios.get(`${getApiUrl}/flashsale/products`).then((response) => {
            setFlashSale(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    if (!flashSale) return <LoadingSale />;

    return (
        <div className='w-full flex flex-col justify-center items-center mt-7'>
            <div className='w-9/12 mt-8 flex flex-col justify-center items-center shadow-xl bg-white rounded-lg relative z-10'>
                <div className=' w-full p-3  flex items-center bg-green-400 border-none rounded-lg'>
                    <div className=' w-7 h-7 flex items-center justify-center rounded-full bg-red-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='white'>
                            <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                        </svg>
                    </div>
                    <div className='font-bold text-xl ml-1 w-full flex justify-between items-center'>
                        <h1 className='text-white'>FLASH SALE:</h1>
                        <div className='flex items-center'>
                            <h1 className='text-lg font-normal'>Kết thúc sau:</h1>
                            <CountDownTimer />
                        </div>
                    </div>
                </div>
                <div className=' flex items-center justify-between w-full'>
                    <button
                        onClick={() => {
                            document.getElementById('container5').scrollLeft -= 600;
                        }}
                        className='z-50 p-2 w-10 h-10 flex justify-center items-center active:scale-105 rounded-full bg-gray-300'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className=' fill-gray-700'>
                            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                    </button>
                    <div className='flex w-full items-center justify-start mx-auto overflow-hidden border-gray-200 shadow-sm p-1 border relative z-10' id='container5' style={{ width: `1300px` }}>
                        <div
                            className='w-full flex whitespace-nowrap relative -z-10'
                            style={{ width: `${flashSale.length * 200}px` }}
                            onScroll={(e) => {
                                e.timeStamp = 0;
                            }}
                        >
                            {flashSale.map((book, index) => (
                                <div key={index} className=' inline-block'>
                                    <BookCard book={book.Product} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            document.getElementById('container5').scrollLeft += 600;
                        }}
                        className='z-50 p-2 w-10 h-10 flex justify-center items-center active:scale-105 rounded-full bg-gray-300'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className=' fill-gray-700'>
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
