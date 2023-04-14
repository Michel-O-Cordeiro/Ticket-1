import React from "react";
import { useRouter } from "next/router";
import { cards } from "@/Components/Grid";
import Header from "@/Components/Header";
import Banner from "@/Components/Banner";
import Container from "@/Components/Container";
import Footer from "@/Components/Footer";

export const TicketShowPage = () => {
    const router = useRouter();
    const { ticketId } = router.query;
    const card = cards.find((card) => card.id === Number(ticketId));


    return (
        <div>
            <div className="fixed z-50 w-full">
                <Header title={card?.title || 'Dados não encontrado'} date={card?.date || 'Dados não encontrado'} />
            </div>
            <Banner image={card?.image || 'Imagem quebrada'} />
            <Container />
            <Footer />


        </div>
    );
};

export default TicketShowPage;