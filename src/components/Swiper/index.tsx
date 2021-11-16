import { Swiper as SwiperComoponent, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper";
import { Flex } from "@chakra-ui/react";
import SwiperImage from "./SwiperImage";

export default function Swiper() {

    const freeMode = {
        delay: 200,
        disableOnInteraction: false,
    }
    return (
        <Flex
            bg="black"
            as="div"
            width="100%"
            maxWidth={1240}
            h={450}
            mx="auto"
        >
            <SwiperComoponent
                modules={[Navigation, Thumbs, Pagination, Autoplay]}
                style={{
                    "--swiper-navigation-color": "#FFBA08",
                } as React.CSSProperties}
                loop={true}
                spaceBetween={10}
                navigation={true}
                pagination={true}
                className="mySwiper2"

                autoplay={{
                    delay: 2000,
                    waitForTransition: true,

                }}
            >
                <SwiperSlide>
                    <SwiperImage image='/images/continentEurope.png' textTitle="Europa" textSubtitle="O continente mais antigo, com diversas histórias e culturas." />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImage image='/images/continentAsia.png' textTitle="Ásia" textSubtitle="Conheça o continente mais diversificado etnicamente." />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImage image='/images/continentAmericaNorte.jpg' textTitle="America do Norte" textSubtitle="A dona de lugares incríveis, cheios de histórias e belezas naturais." />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImage image='/images/continentAfrica.jpg' textTitle="Africa" textSubtitle="Na África, pode contemplar um pôr do sol e crer que presenciou a mão de Deus." />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImage image='/images/continentOceania.jpg' textTitle="Oceania" textSubtitle="Dona de lugares incríveis, cheios de histórias e belezas naturais." />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperImage image="/images/continentAmericaSul.jpg" textTitle="Europa" textSubtitle="Conheça os encantos e as belezas dos países da América do Sul, que oferece atrações e destinos para todo perfil de turista!" />
                </SwiperSlide>
            </SwiperComoponent>

        </Flex >
    )
}
