import React from 'react'
import { favicon, reallogo, favicon2} from '@/assets';


type LogoProps= {
    variant?: 'default' | 'icon';
}

const Logo = ({variant =  'default'}: LogoProps) => {
  return (
    <a
        href=''
        className=''
    
    >
        {variant === 'default' && (
            <img src={reallogo} alt = "finlit" width={900}
            height={250}/>
        )}

{variant === 'icon' && (
            <img src={favicon2} alt = "finlit" width={202}
            height={202}/>
        )}
    </a>
  )
}

export default Logo