import { SimpleGrid } from "@chakra-ui/react";
import Cart from "./cart";

interface CityCartProps {
    citys: [
        {
            id: number;
            city: string;
            contry: string;
            img: string;
            symbol: string;
        }
    ]
}

export default function CityCart({ citys }: CityCartProps) {
    return (
        <SimpleGrid
            flex="1"
            fontSize="20px"
            minChildWidth="256px"
            gap="12"
            align="flex-start"
            mt="10"
            pb="10"
        >
            {citys ? citys.map((e) => {
                return (<Cart key={e.id} image={e.img} city={e.city} country={e.contry} icon={e.symbol} />)
            }) : ''}
        </SimpleGrid>
    )
}
