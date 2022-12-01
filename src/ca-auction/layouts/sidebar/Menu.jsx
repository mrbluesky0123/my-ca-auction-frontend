import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider,
  } from '@chakra-ui/react'
  import { BsDot } from "react-icons/bs";
  import {
    ArrowForwardIcon
  } from '@chakra-ui/icons'

const Menu = () => {

    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        <Link to="/">Home</Link>
                    </Box>
                </AccordionButton>
            </AccordionItem>
            <AccordionItem >
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                        프로젝트
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel h={9} className="hover:bg-slate-200">
                    <div className="flex flex-row text-sm">
                        <Box flex='1' textAlign='left'>
                            <Link to="/aaa">프로젝트 구인</Link>
                        </Box>
                    </div>
                </AccordionPanel>
                <AccordionPanel h={9} className="hover:bg-slate-200 align-middle">
                    <div className="flex flex-row text-sm">
                        <Box flex='1' textAlign='left'>    
                            <Link to="/bbb">프로젝트 구직</Link>
                        </Box>
                    </div>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box flex='1' textAlign='left'>
                    Section 2 title
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
    
}

export default Menu;