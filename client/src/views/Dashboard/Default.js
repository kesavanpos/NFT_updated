
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

export default function Default() {
  // Chakra Color Mode
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
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
          <Globe />
        </Box>        
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <Card p="28px 10px 0px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" ps="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Sales Overview
              </Text>
              <Text fontSize="sm" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  (+5%) more
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "600px" }} ps="16px">
            <Maps/>            
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
