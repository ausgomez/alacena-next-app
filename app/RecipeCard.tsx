import Image from 'next/image';
import React, { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import Link from 'next/link'


export default function RecipeCard({ recipe }: any) {
    const [liked, setLiked] = useState(false);

    React.useEffect(() => {
        const savedRecipes = localStorage.getItem('likedRecipes');
        if (savedRecipes) {
            const parsedRecipes = JSON.parse(savedRecipes);
            if (parsedRecipes.includes(recipe.id)) {
                setLiked(true);
            }
        }
    }, []);

    const handleLike = () => {
        setLiked(!liked);
        const savedRecipes = localStorage.getItem('likedRecipes');
        localStorage.setItem('likedRecipes', JSON.stringify([...JSON.parse(savedRecipes ?? '[]'), recipe.id]));
    };

    return (
        <Center py={6}>
            <Box
                w="xs"
                rounded={'sm'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
                <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                    <Img
                        src={
                            recipe.image ?? 'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                        }
                        roundedTop={'sm'}
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt={'Blog Image'}
                    />
                </Box>
                <Box p={4}>
                    <Box
                        bg="black"
                        display={'inline-block'}
                        px={2}
                        py={1}
                        color="white"
                        mb={2}>
                        <Text fontSize={'xs'} fontWeight="medium">
                            {recipe.sourceName}
                        </Text>
                    </Box>
                    <Heading color={'black'} fontSize={'2xl'}>
                        {recipe.title}
                    </Heading>
                    <Text color={'gray.500'} noOfLines={2}>
                        {recipe.description}
                    </Text>
                </Box>
                <HStack borderTop={'1px'} color="black">
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        cursor={'pointer'}
                        w="full">
                        <Link href={`/recipe/${recipe.id}`}>
                            <Text fontSize={'md'} fontWeight={'semibold'}>
                                View more
                            </Text>
                        </Link>
                        <BsArrowUpRight />
                    </Flex>
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        borderLeft={'1px'}
                        cursor="pointer"
                        onClick={() => handleLike()}>
                        {liked ? (
                            <BsHeartFill fill="red" fontSize={'24px'} />
                        ) : (
                            <BsHeart fontSize={'24px'} />
                        )}
                    </Flex>
                </HStack>
            </Box>
        </Center >
    );
}
