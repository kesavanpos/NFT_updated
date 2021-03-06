import { default as Logo } from '../../assets/img/cut-us.svg';
import { ReactSVG } from 'react-svg'

// Chakra imports
import {
    Box,
    Flex,
    Grid,
    Progress,
    SimpleGrid,
    Spacer,
    Stack,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    Button,
    Center,
    Image
  } from "@chakra-ui/react";
  // Custom components
  import Card from "../../components/Card/Card.js";
  import CardBody from "../../components/Card/CardBody.js";
  import CardHeader from "../../components/Card/CardHeader.js";
  import BarChart from "../../components/Charts/BarChart";
  import LineChart from "../../components/Charts/LineChart";
  import Globe from "../../components/Globe/Globe";
  import IconBox from "../../components/Icons/IconBox";
  import Maps from "../../components/Maps/Map"
  
  import { Link } from "react-router-dom";
  
  // Custom icons
  import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    RocketIcon,
    StatsIcon,
    WalletIcon,
  } from "../../components/Icons/Icons.js";
  import React from "react";
  import {
    barChartDataDefault,
    barChartOptionsDefault,
    lineChartDataDefault,
    lineChartOptionsDefault,
  } from "../../variables/charts";

  import { default as mintImg } from '../../assets/img/mint.jpg';
  import $ from 'jquery';
 

  $(function() {
    $('path').on('click',function () {    
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      var fill = "#" + randomColor;
      $(this).css('fill', "#990000").css('stroke', "#990000");
    });

    
  });

 
const NFTMap = () =>{
    const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  const selectSVG = (e) =>{
    
  }
  
//   const downloadPng=() => {
//     var img = new Image();
//     img.onload = function (){
//    var canvas = document.createElement("canvas");
//    canvas.width = img.naturalWidth;
//    canvas.height = img.naturalHeight;
//    var ctxt = canvas.getContext("2d");
//    ctxt.fillStyle = "#fff";
//    ctxt.fillRect(0, 0, canvas.width, canvas.height);
//          ctxt.drawImage(img, 0, 0);
//    var a = document.createElement("a");
//    a.href = canvas.toDataURL("image/png");
//    a.download = "image.png"
//    document.body.appendChild(a);
//    a.click();
//    document.body.removeChild(a);
//     };
//     var innerSvg = document.querySelector("#div-surrounding-svg-element svg svg");
//     var svgText = (new XMLSerializer()).serializeToString(innerSvg);
//     img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svgText);
//  }
  

    return(
        <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }} mt={'10px'}>
        <Text
          color={textColor}
          fontWeight="bold"
          fontSize="3xl"
          mb="30px"
          ps="20px"
        >
          Map
        </Text>
        <Grid
          templateColumns={{ sm: "4fr 1fr", xl: "1.2fr 1fr" }}
          gap="32px"
          maxW="100%"
          w="100%"
        >
          <Box
            minW="700px"
            h="700px"
            position="absolute"
            right="30px"
            top="14%"
            display={{ sm: "none", md: "block" }}
          >
            <ReactSVG             
             src={Logo}/>
          </Box>        
        </Grid>
        <Grid
          templateColumns={{ sm: "1fr", lg: "0.8fr 2.2fr" }}
          gap="24px"
          mb={{ lg: "26px" }}
        >
          <Card p="28px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <Image src={mintImg} alt='Image' mb={'24px'} />
            <CardHeader mb="20px" ps="22px">
              <Flex direction="column" alignSelf="flex-start">
                <Center><Text fontSize="18px" color={textColor} fontWeight="bold" mb="6px">
                Select Your Pixels, Buy Mint and own a part of the Globe.

                </Text></Center>
                <Center>
               
                    </Center>
                    <Text fontSize="md" color={textColor} fontWeight="normal" mb="16px" mt="16px">
                    Let's make history together. Did you
ever dream of buying a piece of
realestate in any corner the world?
Now you have the chance to do that.
                </Text>
                
                <Center>
                <Button
                      type='submit'
                      bg='teal.300'                    
                      p='8px 32px'
                      mb={5}
                      mt={5}
                      _hover='teal.300'
                      color='white'
                      fontSize='md'  
                      borderRadius = {0}                      
                      >
                      Buy With ETH
                    </Button>
                </Center>
  
              </Flex>
            </CardHeader>
            
          </Card>
        </Grid>
      </Flex>
    )
}
  

export default NFTMap;