import React from 'react'
import './LinkWithIcon.css'

const LinkWithIcon = ({title , link , emoji , sideBar}) => {
  return (
    <a href={link} className={sideBar? 'align-center sidebar-link' : 'align-center'}>{title}
            <img src={emoji} alt="image" className="link-emoji" />
          </a>
  )
}

export default LinkWithIcon