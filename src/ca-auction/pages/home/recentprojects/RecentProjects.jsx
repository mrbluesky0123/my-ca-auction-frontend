import {
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Heading,
    Button,
    Badge,
    Flex, 
    Spacer, 
    Wrap,
    Grid,
    GridItem
} from '@chakra-ui/react';


const RecentProjects = () => {

    return (
        <div>
            <Text className='text-2xl font-bold' pb={5}>Recent Projects</Text>
                {/* <SimpleGrid className='overflow-x-auto' spacing={1} templateColumns='repeat(auto-fill, minmax(200px, 200px))' >  */}
                {/*templateColumns='repeat(auto-fit, minmax(200px, 1fr))'*/}
                <div className='flex flex-nowrap'>
                    <Card className='w-96'>
                        <CardHeader>
                            <Heading size='md'>GAIA 고도화</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className='whitespace-normal'>고객 정보 시스템인 GAIA의 고도화를 위한 프로젝트입니다.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>상세보기</Button>
                        </CardFooter>
                    </Card>
                    <Card className='w-96'>
                        <CardHeader>
                            <Heading size='md'>DIVA 이관</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className='whitespace-normal'>계정계의 개인정보이용제공동의내역을 DIVA로 이관하는 프로젝트입니다.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>상세보기</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>PIGEON 고도화</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className='whitespace-normal'>공공마이데이터 시스템인 PIGEON 프로젝트 고도화 하실분~</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>상세보기</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>계정계 고객 업무</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className='whitespace-normal'>계정계 고객 업무를 함께하실 분을 모집합니다. (선착순)</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>상세보기</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>계정계 고객 업무</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className='whitespace-normal'>계정계 고객 업무를 함께하실 분을 모집합니다. (선착순)</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>상세보기</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>계정계 고객 업무</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className='whitespace-normal'>계정계 고객 업무를 함께하실 분을 모집합니다. (선착순)</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>상세보기</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>계정계 고객 업무</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className='whitespace-normal'>계정계 고객 업무를 함께하실 분을 모집합니다. (선착순)</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>상세보기</Button>
                        </CardFooter>
                    </Card>
                </div>
                {/* </SimpleGrid> */}
                {/* <div className='overflow-auto'>
                    <Grid className='grid-flow-col auto-cols-fr' templateColumns='repeat(14, minmax(40px, 1fr))' gap={3}>
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                        <GridItem w='100%' h='10' bg='blue.500' />
                    </Grid>
                </div> */}
            <div className='flex flex-row'>

            </div>
        </div>
    )
}

export default RecentProjects;
