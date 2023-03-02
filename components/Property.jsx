import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGrid, BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import DefaultImage from "../assets/images/house.webp";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="390px"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          width={410}
          height={260}
          alt="house image"
        />
      </Box>

      <Box w="full" display={"flex"} flexDirection={"column"} gap="24px">
        <Flex
          paddingTop="2"
          alignItems="center"
          justifyContent="space-between"
          flex-direction={"column"}
          gap="12px"
        >
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box textAlign={"center"}>
            <Avatar size="sm" src={agency?.logo?.url} maxWidth="50%" />
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          gap="16px"
          color="blue.400"
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft
          <BsGridFill />
        </Flex>
        <Text fontSize={"lg"} textAlign={"center"}>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
