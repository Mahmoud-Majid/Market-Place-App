import { Box, SimpleGrid, Text, Stack, Flex } from '@chakra-ui/react';
import Category from './Category';

const sale = '/sale.png';
const search = '/search.png';
const rent = '/rent.jpg';
const list = '/list.png';




export default function Categories() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Category url={sale} title='Sale' link='/search?purpose=for-sale'/>
        <Category url={rent} title='Rent' link='/search?purpose=for-rent'/>
        <Category url={search} title='Community search' link='/search'/>
        <Category url={list} title='List your property' link='/about'/>
      </SimpleGrid>
    </Box>
  );
}