import "./whyChoose.css"
import icon1 from "../images/home/home_GOLD-07.png"
import icon2 from "../images/home/home_GOLD-08.png"
import icon3 from "../images/home/home_GOLD-09.png"
import icon4 from "../images/home/home_GOLD-10.png"
import icon5 from "../images/home/home_GOLD-11.png"
import icon6 from "../images/home/home_GOLD-12.png"

const WhyChoose = ({ content }) => {
  const icon_list = [
    { pic: icon1, text: content?.richMore[0].description },
    { pic: icon2, text: content?.richMore[1].description },
    { pic: icon3, text: content?.richMore[2].description },
    { pic: icon4, text: content?.richMore[3].description },
    { pic: icon5, text: content?.richMore[4].description },
    { pic: icon6, text: content?.richMore[5].description },
  ]

  return (
    <div className='whychoose'>
      <div className='subtitle-middle-line'>
        <div className='middle-line' />
        <span>為何選擇RICHMORE</span>
        <div className='middle-line' />
      </div>

      <div className='whychoose-features'>
        {icon_list.map((item, id) => (
          <div className='whychoose-item' key={id}>
            <img className='whychoose-icon' src={item.pic} alt='' />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChoose
