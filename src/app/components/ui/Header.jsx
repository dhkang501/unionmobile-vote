import Image from 'next/image'
import React from 'react'
import '@/app/styles/header/index.scss'

const Header = () => {
  // TODO: 뒤로가기 버튼 true false 조건
  return (
    <div className='header'>
      <Image src="/static/icons/ic_arrow_left_line_bk_24.png" alt="Back Arrow" width={24} height={24} />
      <div className='titleText'>2024 WMU</div>
      <Image src="/static/icons/ic_close_line_bk_24.png" alt="Close" width={24} height={24} />
    </div>
  )
}

export default Header