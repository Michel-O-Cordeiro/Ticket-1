import React from 'react';
import Card, { CardProps } from '../Card'
import Link from 'next/link';

const cards: { id: number; title: string; date: string; location: string; year: string; image: string; }[] = [
  {
    id: 1,
    title: 'Happy Holi Goiânia',
    date: '15/04',
    location: 'Goiânia, GO',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/happy-holi-goiania-14-11.jpeg'
  },
  {
    id: 2,
    title: 'EXPOAGRO Bragança Paulista - 20/04 - Ícaro e Gilmar / Cleiton e Romario',
    date: '20/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-2004-icaro-e-gilmar-cleiton-e-romario-1678475444.jpg'
  },
  {
    id: 3,
    title: 'EXPOAGRO Bragança - Passaporte',
    date: '20/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-passaporte-1679718621.jpg'
  },
  {
    id: 4,
    title: 'EXPOAGRO Bragança Paulista - 21/04 - Alok / Hugo e Guilherme',
    date: '21/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-2104-alok-hugo-e-guilherme-1678475454.jpg'
  },
  {
    id: 5,
    title: 'EXPOAGRO Bragança Paulista - 22/04 - Zé Neto e Cristiano / Ana Castela',
    date: '22/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-2204-ze-neto-e-cristiano-ana-castela-1678475465.jpg'
  },
  {
    id: 6,
    title: 'EXPOAGRO Bragança Paulista - 23/04 - Gusttavo Lima / KVSH',
    date: '23/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-2304-gusttavo-lima-kvsh-1678475473.jpg'
  },
  {
    id: 7,
    title: 'EXPOAGRO Bragança Paulista - 27/04 - João Bosco & Vinícius / João Villa & Rafael',
    date: '27/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-2704-joao-bosco-vinicius-joao-villa-rafael-1678496287.jpg'
  },
  {
    id: 8,
    title: 'EXPOAGRO Bragança Paulista - 28/04 - Henrique e Juliano / Maju Santana',
    date: '28/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-2804-henrique-e-juliano-1678475481.jpg'
  },
  {
    id: 9,
    title: 'Redenção Psicodélica',
    date: '29/04',
    location: 'Serra Azul, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/redencao-psicodelica-1677423598.jpg'
  },
  {
    id: 10,
    title: 'EXPOAGRO Bragança Paulista - 29/04 - Jorge & Mateus / Dennis',
    date: '29/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-2904-jorge-mateus-dennis-1678475488.jpg'
  },
  {
    id: 11,
    title: 'Samsara Leave Experience',
    date: '29/04',
    location: 'Barra De São Miguel, AL',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/samsara-leave-1677596067.jpg'
  },
  {
    id: 12,
    title: 'EXPOAGRO Bragança Paulista - 30/04 - Maiara & Maraisa / Gustavo Mioto',
    date: '30/04',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-3004-maiara-maraisa-gustavo-mioto-1678476176.jpg'
  },
  {
    id: 13,
    title: 'EXPOAGRO Bragança Paulista - 01/05 - Barões da Pisadinha',
    date: '01/05',
    location: 'Bragança Paulista, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/expoagro-braganca-paulista-0105-baroes-da-pisadinha-1678478997.jpg'
  },
  {
    id: 14,
    title: 'Baobá Festival 5ª Edição',
    date: '06/05',
    location: 'São José Dos Campos, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/baoba-festival-14-11.jpeg'
  },
  {
    id: 15,
    title: 'Festa do Peão Cajamar - Gusttavo Lima & Felipe Araujo',
    date: '19/05',
    location: 'Cajamar, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/festa-do-peao-cajamar-gusttavo-lima-felipe-araujo-1675390598.jpg'
  },
  {
    id: 16,
    title: 'Playground Music Festival',
    date: '20/05',
    location: 'Porto Belo, SC',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/playground-music-festival-1677709760.jpg'
  },
  {
    id: 17,
    title: 'Festa do Peão Cajamar - Zé Neto e Cristiano & Pedro Sampaio',
    date: '20/05',
    location: 'Cajamar, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/festa-do-peao-cajamar-ze-neto-e-cristiano-pedro-sampaio-1675390854.jpg'
  },
  {
    id: 18,
    title: 'Festa do Peão Cajamar - Jorge e Mateus e Alok',
    date: '26/05',
    location: 'Cajamar, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/festa-do-peao-cajamar-jorge-e-mateus-e-alok-1676919047.jpg'
  },
  {
    id: 19,
    title: 'INSIGHT',
    date: '27/05',
    location: 'Mairiporã, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/insight-1676487470.jpeg'
  },
  {
    id: 20,
    title: 'Festa do Peão Cajamar - Maiara e Maraisa e Dennis',
    date: '27/05',
    location: 'Cajamar, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/festa-do-peao-cajamar-maiara-e-maraisa-e-dennis-1676918955.jpg'
  },
  {
    id: 21,
    title: 'Warm Up Soul Deep',
    date: '27/05',
    location: 'Ribeirão Preto, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/warm-up-soul-deep-1677202294.jpg'
  },
  {
    id: 22,
    title: 'SUNLIGHT FESTIVAL',
    date: '08/07',
    location: 'São José Dos Campos, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/sunlight-festival-1676382641.jpg'
  },
  {
    id: 23,
    title: 'Playground Music Festival',
    date: '15/07',
    location: ' Itu, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/playground-sp-22-10-2022.jpeg'
  },
  {
    id: 24,
    title: 'Redenção Psicodélica',
    date: '29/07',
    location: 'Mairiporã, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/power-bass-festival-1676985978.jpeg'
  },
  {
    id: 25,
    title: 'Moonworld - 7 Anos',
    date: '19/08',
    location: 'São Paulo, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/moonworld-7-anos-1676381193.jpeg'
  },
  {
    id: 26,
    title: 'Ultra Trance',
    date: '09/09',
    location: 'São José Dos Campos, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/ultra-trance-1680368988.jpeg'
  },
  {
    id: 27,
    title: 'Circus Music Festival',
    date: '09/09',
    location: 'Serra Azul, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/circus-music-festival-1680883996.jpeg'
  },
  {
    id: 28,
    title: 'Shivaneris - Edição 10 anos',
    date: '16/09',
    location: 'Itirapina, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/shivaneris-edicao-10-anos-1668014269.jpg'
  },
  {
    id: 29,
    title: 'Playground Music Festival',
    date: '09/10',
    location: 'São José Dos Campos, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/playground-music-festival-1670512978.jpeg'
  },
  {
    id: 30,
    title: 'ASLAM 6 Anos',
    date: '15/10',
    location: 'São Paulo, SP',
    year: '2023',
    image: 'https://cdn.uptickets.com.br/events/images/aslam-6-anos-1670509146.jpeg'
  },

]

export { cards };

export default function Grid() {

  return (
    <div className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-0 p-2.5">
      {cards.map((item) => (
        <Card key={item.id} id={item.id.toString()} title={item.title} date={item.date} location={item.location} year={item.year} image={item.image} />
      ))}
    </div>
  );
}


