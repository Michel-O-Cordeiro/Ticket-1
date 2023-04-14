import React from 'react';
import { useRouter } from 'next/router';
import querystring from 'querystring';

export interface CardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  year: string;
  image: string;
}


export default function Card({ title, date, location, year, image, id }: CardProps) {
  const router = useRouter();

  interface TicketQueryParams {
    [key: string]: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null;
  }

  const handleOpenTicket = (card: CardProps) => {
    const queryParams: TicketQueryParams = { ticketId: card.id.toString() };
    const queryString = querystring.stringify(queryParams);
    router.push({
      pathname: `/ticket/${card.id}`,
      query: queryParams,
      // search: `?${queryString}`
    });
  }

  return (
    <div className='flex px-3 py-2 mt-20 shadow-2xl'>
      <button onClick={() => handleOpenTicket({ title, date, location, year, image, id })} className="px-2 py-2">
        <div>
          <img className="" src={image} alt="image" />
        </div>

        <div className="py-2.5 px-0">
          <div className='flex flex-row'>
            <div className="flex-1 font-bold text-lg items-center">
              {title}
            </div>
            <div className='font-bold text-lg'>
              {date}
            </div>
          </div>
          <div className="flex items-center text-[#888]">
            <div className='flex-1'>
              <svg className=" h-4 items-center flex flex-row " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"></path></svg>
              {location}
            </div>
            <div>
              {year}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
