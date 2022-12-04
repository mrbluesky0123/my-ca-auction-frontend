import { Image } from '@chakra-ui/react'

const Logo = () => {
    
    return (
        <div>
            <img
                className='py-2.5'
                width='100px'
                objectFit='none'
                src='/image/kakaobank.png'
                alt='kakaobank'
            />  
        </div>
    )
}

export default Logo;