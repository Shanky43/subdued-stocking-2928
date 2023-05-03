import { Box, Container, HStack, Image, Spacer, Text, } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SpotlightAds = [
    {
        image: "https://onemg.gumlet.io/images/q_auto,w_150,h_150,f_auto,c_fit/htixcxvd91ofrcfaoyzq/bjain-nux-vomica-dilution-200-ch.jpg",
        name: "Bjain Nux Vomica Dilution 200 CH",
        description: "bottle 12ml Dilution",
        rating: 4.6,
        mrp: 65,
        offer: "9% off",
        price: 59,
        users_rating: "109 ratings"
    },
    {
        image: "https://onemg.gumlet.io/images/q_auto,w_150,h_150,f_auto,c_fit/42ea5450-ef22-4a3d-9e49-2c110a710708/bjain-omeo-allergy-tablet.jpeg",
        name: "Bjain Omeo Allergy Tablet",
        description: "bottle of 25gm tablets",
        rating: 4.1,
        mrp: 155,
        offer: "14% off",
        price: 133,
        users_rating: "45 ratings"
    },
    {
        image: "https://onemg.gumlet.io/images/q_auto,w_150,h_150,f_auto,c_fit/a0ea7747911d4c5da4a116699b76628c/bjain-omeo-diabeteez-drop.jpg",
        name: "Bjain Omeo Diabeteez Drop",
        description: "bottle of 30ml Drop",
        rating: 3.8,
        mrp: 150,
        offer: "14% off",
        price: 120,
        users_rating: "14 ratings"
    },
    {
        image: "https://onemg.gumlet.io/images/q_auto,w_150,h_150,f_auto,c_fit/i6vpnss1mvrivh2gmsfu/bjain-baryta-carbonica-dilution-30-ch.jpg",
        name: "Bjain Baryta Carbonica Dilution 30 CH",
        description: "bottle 30ml Dilution",
        rating: 4.8,
        mrp: 95,
        offer: "12% off",
        price: 83,
        users_rating: "30 ratings"
    },
    {
        image: "https://onemg.gumlet.io/images/q_auto,w_150,h_150,f_auto,c_fit/10ab19e2f18a4e519a704fbaf25e7208/bjain-omeo-kalmegh-drop.jpg",
        name: "Bjain Omeo Kalmegh Drop",
        description: "bottle 30ml Drop",
        rating: 4.5,
        mrp: 95,
        offer: "13% off",
        price: 82,
        users_rating: "28 ratings"
    },
    {
        image: "https://onemg.gumlet.io/images/q_auto,w_150,h_150,f_auto,c_fit/prgnisrvwtxwq6spyqp3/bjain-lycopodium-clavatum-dilution-200-ch.jpg",
        name: "Bjain Lycopodium Clavatum Dilution 200 CH",
        description: "bottle 12ml Dilution",
        rating: 4.8,
        mrp: 65,
        offer: "14% off",
        price: 56,
        users_rating: "49 ratings"
    },
    {
        image: "https://onemg.gumlet.io/images/q_auto,w_150,h_150,f_auto,c_fit/b16131c0ed114c3291ce34518b917d9b/bjain-tinospora-cordifolia-mother-tincture-q.jpg",
        name: "Bjain Tinospora Cordifolia Mother Tincture Q",
        description: "bottle 100ml Mother Tincture",
        rating: 4.2,
        mrp: 195,
        offer: "9% off",
        price: 176,
        users_rating: "29 ratings"
    },
    {
        image: "https://onemg.gumlet.io/images/q_auto,w_150,h_150,f_auto,c_fit/0c37a1afd60a4062bfdd67a9c70e79be/bjain-andrographis-paniculata-mother-tincture-q.jpg",
        name: "Bjain Andrographis Paniculata Mother Tincture Q",
        description: "bottle 100ml Mother Tincture",
        rating: 4.5,
        mrp: 195,
        offer: "9% off",
        price: 168,
        users_rating: "29 ratings"
    }

]
const popularbrands = [
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/a24d39b3-be87-42fe-a9c7-81e0137dc8e8.png", name: "ADEL Homeopathy" },
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/j1mwpwwh6hwegd4ecbah.png", name: "Dr Willmar Schwabe India " },
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/mfswtc9scqikisqs5x9u.png", name: "SBL Homeopathy" },
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/emvykrq48e0lojdqjnmy.png", name: "Bakson's" },
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/jjn8u1l625epfbw7kbhi.png", name: "BJAIN Homeopathy" },
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/alty1c84eogjq2hfz3q0.png", name: "Dr. Batra's Products" },
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/lvysji0eofj38ghn1j5v.png", name: "Dr Reckeweg" },
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/470dd15e-564d-4335-a633-6146d0239858.png", name: "Medisynth" },
    { image: "https://onemg.gumlet.io/h_150,w_150,a_ignore,q_auto,f_auto,c_fit/gpr2zunhramcprkush5j.png", name: "Wheezal" }
]
const ShopByConcern = [
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/c2ymdg1tavs7mcnomcy0.png", name: "Warts" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/rpgkuklyd2youea8fdyr.png", name: "Hair Care" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/bfhia3yw4eemlxdslkks.png", name: "Sexual Wellness" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/nq5fthflkzfoahebdlv4.png", name: "Fungal Infection" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/uachuw80oilbpqnqmefp.png", name: "Diabetes" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/fdgokqurlq4c4jck8xpe.png", name: "Hypothyroidism" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/mvllnlsj1ttxuuarsfei.png", name: "Obesity" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/blzqsofglmrd8xlakfhu.png", name: "Piles and Fissures" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/wfchhzujp0duz7ir5e9w.png", name: "Allergic Rhinitis" }
]
const ShopByHomeopathy = [
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/p9e2jc60m3r5nbysyfm0.png", name: "Berberis Aquifolium" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/wqsh5tn0qwxoqsvsxm16.png", name: "Berberis Vulgaris" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/sijdkmnjf3ih8k4z04co.png", name: "Nux Vomica" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/jkdrio4gxrdmelci2yre.png", name: "Arinca Montana" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/liabuc0dqnft3frvk2o0.png", name: "Syxygium Jambolanum" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/wd7et3tgcqks3ipxswhw.png", name: "Silicea" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/dosvy0feaoni0znz1tdz.png", name: "Thyroidinum" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/fcgg3l4cei3adzzgzdre.png", name: "Cineraria Maritima" },
    { image: "https://onemg.gumlet.io/a_ignore,f_auto,w_150,q_auto,h_150,c_fit/vnjqwoktfbdmk5af1q7t.png", name: "Phytolacca Berry" }
]
const Homeopathy = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div >
            <Container maxW={"100%"}>
                <Box ml={5}>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>HOMEOPATHY</Text>

                    <Box mt="5">
                        <Image src='https://onemg.gumlet.io/c0a6a2ef-7fa4-4d42-b7df-fb90828aa145_1667474655.jpg?w=1062&h=124&format=auto' alt='banner'
                            width={"100%"} />
                    </Box>

                    <Box mt="5" width={"100%"}>
                        <Text textAlign={"left"} fontWeight={"600"}>In the Spotlight</Text>
                        <Box bgColor={"white"}
                            mt="5">
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                            >
                                {
                                    SpotlightAds.map(items => (
                                        <Box p="5" m="2" width={"100%"} _hover={{
                                            " box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                        }} borderRadius={"10"}>
                                            <Box style={{ display: 'flex', justifyContent: "center" }}> <Image src={items.image} alt={items.name} width={"100px"} h={["100px", "170px"]} /></Box>
                                            <Text width={"100%"} height={"100%"} pt="5" fontSize={".85em"} fontWeight={"600"}>{items.name}</Text>
                                            <Text fontSize={".8em"} pt="1" color={"gray"}>{items.description}</Text>
                                            <Box style={{ display: "flex" }} pt="3" h={["80%", "100%"]}>
                                                <Box style={{ display: "flex" }} color={"white"}
                                                    bgColor={"#1aab2a"} pl="2" width={"50px"}><Text fontSize={".85em"}>{items.rating}</Text>
                                                    <AiFillStar style={{ justifyContent: 'center', alignItems: 'center', margin: "auto" }} textAlign="center" />
                                                </Box>
                                                <Text pl="2" fontSize={".8em"} color={'gray'}>{items.users_rating}</Text>
                                            </Box>
                                            <Text mt="5" fontSize={".85em"} color={"gray"}>MRP <Text as={"span"} textDecoration={"line-through"}>₹ {items.mrp}</Text> <Text color="green" as={"span"}>{items.offer}</Text></Text>
                                            <Box><HStack><Text fontWeight={"bold"}>₹{items.price}</Text> <Spacer /> <Text color={"#ff6f61"} cursor={"pointer"} fontWeight={"bold"}>ADD</Text></HStack></Box>

                                        </Box>
                                    ))
                                }
                            </Carousel>
                        </Box>
                    </Box>
                    <Box mt="10" width={"100%"}>
                        <Text textAlign={"left"} fontWeight={"600"}>Popular brands</Text>
                        <Box bgColor={"white"} mt="5" >
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}

                            >
                                {
                                    popularbrands.map(items => (
                                        <Box p="5" >
                                            <Box p="5" _hover={{
                                                " box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                            }} borderRadius={"10"} >
                                                <Image src={items.image} alt={items.name} width={"250px"} />
                                                <Text textAlign={'center'} pt="5" fontWeight={500}>{items.name}</Text>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Carousel>
                        </Box>

                    </Box>
                    <Box mt="5%" mb="5%">
                        <Image src='https://onemg.gumlet.io/c0a6a2ef-7fa4-4d42-b7df-fb90828aa145_1667474655.jpg?w=1062&h=124&format=auto' alt='banner'
                            width={"100%"} />
                    </Box>
                    <Box mt="10" width={"100%"} mb="5%">
                        <Text textAlign={"left"} fontWeight={"600"}>Shop by concern</Text>
                        <Box bgColor={"white"} mt="5" >
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}

                            >
                                {
                                    ShopByConcern.map(items => (
                                        <Box  pl="5"pr="5" >
                                            <Box p="5" _hover={{
                                                " box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                            }} borderRadius={"10"} >
                                                <Image src={items.image} alt={items.name} width={"250px"} />
                                                <Text textAlign={'center'} pt="5" fontWeight={500}>{items.name}</Text>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Carousel>
                        </Box>

                    </Box>
                    <Box mt="10" width={"100%"} mb="5%">
                        <Text textAlign={"left"} fontWeight={"600"}>Shop by homeopathy salts</Text>
                        <Box bgColor={"white"} mt="5" >
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}

                            >
                                {
                                    ShopByHomeopathy.map(items => (
                                        <Box pl="5"pr="5" >
                                            <Box p="5" _hover={{
                                                " box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                                            }} borderRadius={"10"} >
                                                <Image src={items.image} alt={items.name} width={"250px"} />
                                                <Text textAlign={'center'} pt="5" fontWeight={500}>{items.name}</Text>
                                            </Box>
                                        </Box>
                                    ))
                                }
                            </Carousel>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Homeopathy