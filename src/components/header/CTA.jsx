import React from 'react'

// import CV from '../../assets/cv.pdf'  CV 파일 추가해야된다.
const CTA = () => {
  return (
    <div className="cta">
        {/* <a href="{CV}">Download CV</a> */}
        <a href ="#contact" className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA