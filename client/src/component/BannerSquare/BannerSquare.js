import style from './bannerSquare.module.css';

const BannerSquare = ({ header, data, width, height, top }) => {
  const container_style = {
    width: width,
    height: height,
    top: top,
  };
  return (
    <div className={style.square_container} style={container_style}>
      <div className={style.header}>{header}</div>
      <div className={style.item_container}>
        {data?.map((element, idx) => (
          <div key={idx} className={style.item}>
            <div className={style.icon}>
              <img src={element?.icon} alt="" />
            </div>
            <div className={style.text}>
              {element?.text}
              <p>{element?.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSquare;
