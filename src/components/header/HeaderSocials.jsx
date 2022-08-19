import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        {/* 링크드인 링크 taget _blank ==> 새로운 탭에서 오픈 */}
        <a href ="www.naver.com" target="_blank"><BsLinkedin/></a> 
        <a href ="www.github.com" target="_blank"><BsGithub/></a>
        {/* <a href ="www.naver.com" target="_blank"></a>  */}
    </div>
  )
}

export default HeaderSocials