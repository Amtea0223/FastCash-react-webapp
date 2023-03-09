import style from './bannerSquare.module.css';

const BannerSquare = ({ header, data }) => {
  return (
    <div className={style.square_container}>
      <div className={style.header}>按揭及業主貸款</div>
      <div className={style.item_container}>
        {data?.map((element, idx) => (
          <div key={idx} className={style.item}>
            <div className={style.icon}>
              <img src={element?.icon} alt="" />
            </div>
            <div className={style.text}>{element?.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSquare;
