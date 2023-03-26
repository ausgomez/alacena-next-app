import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
    Button
} from '@chakra-ui/react';

interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags && props.tags.length > 0 && props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

interface BlogAuthorProps {
    date: Date;
    name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const RecipePageComponent = ({ recipe }: any) => {
    return (
        <Container maxW={'7xl'} p="12">
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Image
                            borderRadius="lg"
                            src={
                                recipe.image ?? 'https://via.placeholder.com/400x500'
                            }
                            alt="some good alt text"
                            objectFit="contain"
                        />
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)'
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    <BlogTags tags={recipe.dishTypes} />
                    <Heading marginTop="1">
                        <Text>
                            {recipe.title}
                        </Text>
                    </Heading>
                    <Divider marginTop="6" />
                    <div dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
                    <Divider marginTop="6" />
                    <Link href={recipe.sourceUrl} width='100%' isExternal>
                        <Button width='100%'>
                            View Recipe
                        </Button>
                    </Link>
                    <BlogAuthor name={recipe.sourceName} date={new Date()} />
                </Box>
            </Box>
        </Container>
    );
};

export default RecipePageComponent;