import "./footer.css"
import icon from "../images/logo.png"
import { HashLink } from "react-router-hash-link"
import { useMediaQuery } from "react-responsive"

const Footer = () => {
  const isMobileTablet = useMediaQuery({ query: "(max-width: 1212px)" })


  const commonLink_list = [
    {
      title: "主頁",
      url: "/",
    },
    {
      title: "關於 FAST CASH",
      url: "/about",
    },
    {
      title: "免責聲明",
      url: "/disclaimer",
    },
    {
      title: '隱私政策',
      url: '/ordinance',
    },
    {
      title: '個人資料收集聲明',
      url: '/privateLoan',
    },
    {
      title: "放債人條例",
      url: "/privateLoan",
    },
  ]



  // const loanServices_list = [
  //   {
  //     title: "免TU貸款",
  //     url: "/loanservices?#TU",
  //   },
  //   {
  //     title: "物業一按 | 二按",
  //     url: "/loanservices?#mortgage",
  //   },
  //   {
  //     title: "中小企周轉貸款",
  //     url: "/loanservices?#smeloan",
  //   },
  //   {
  //     title: "私人借貸",
  //     url: "/loanservices?#privateLending",
  //   },
  //   {
  //     title: "清卡數及稅貸",
  //     url: "/loanservices?#creditcard",
  //   },
  //   {
  //     title: "網上貸款",
  //     url: "/loanservices?#onlineLoan",
  //   },
  // ]
  // const loanServices_list = [
  //   {
  //     title: "免TU貸款",
  //     url: "/tu",
  //   },
  //   {
  //     title: "物業一按 | 二按",
  //     url: "/mortgage",
  //   },
  //   {
  //     title: "中小企周轉貸款",
  //     url: "/smeloan",
  //   },
  //   {
  //     title: "私人借貸",
  //     url: "/privateLending",
  //   },
  //   {
  //     title: "清卡數及稅貸",
  //     url: "/creditcard",
  //   },
  //   {
  //     title: "網上貸款",
  //     url: "/onlineLoan",
  //   },
  // ]

  const loanServices_list = [
    {
      title: '私人貸款',
      url: '/privateLoan',
    },
    {
      title: '按揭及業主貸款',
      url: '/mortgage',
    },
    {
      title: '結餘轉戶',
      url: '/balance',
    },
    {
      title: '申請表格',
      url: '/application',
    },
  ];

  return (
    <div className="footer">
      {!isMobileTablet && (
        <div className="footer-container">
          <div className="ft1">
            <img className="footer-icon" src={icon} alt="" />
          </div>
          <div className="ft2">
            <div>
              {/* <p>常用連結</p> */}
              {commonLink_list.map((item, index) => (
                <div key={index} className="mt-3">
                  <HashLink smooth to={item.url}>
                    {item.title}
                  </HashLink>
                </div>
              ))}
            </div>
            <div style={{ marginLeft: "122px", marginTop:"1rem"}} className="footer-loanServices">
              <p>貸款服務</p>
              {loanServices_list.map((item, index) => (
                <div key={index} className="mt-3">
                  <HashLink smooth to={item.url}>
                    {item.title}
                  </HashLink>
                </div>
              ))}
            </div>
          </div>
          <div className="ft3">
            <a href="tel:2682-8668">
              <p>查詢熱線：+852 2887 7002</p>
            </a>
            <a href="tel:9363-4203">
              <p> Whatsapp：+852 5647 2394</p>
            </a>
          </div>
          <div className="ft4">
            <p>地址：尖沙咀山林道4號恒貿商業中心9樓3室</p>
            {/* <p>營業時間：10 : 00 - 22 : 00</p> */}
            <p>Money Lenders Licence: 1687/2022</p>
          </div>
          <div className="ft5">
            <p>忠告：借錢梗要還，咪俾錢中介</p>
            <a href="tel:2682-8668">
              <p>投訴熱線：+852 2887 7002</p>
            </a>
            <div className="footer-statement">
              <p>註: 根據《放債人條例》年利率最高不超過48厘。</p>
              <p>供款期由6個月至個120月常見還款例子:</p>
              <p>
                年利率為30%情況下的貸款HK$10,000， 還款期數12期，每期還款額為
                HK$975
              </p>
            </div>
          </div>
          <div className="ft6"></div>
        </div>
      )}
      {isMobileTablet && (
        <div className="footer-container-mob">
          <img className="footer-icon" src={icon} alt="" />
          <div className="footer-contact-mob">
            <a href="tel:2682-8668">
              <p>查詢熱線：+852 2887 7002</p>
            </a>
            <a href="tel:9363-4203">
              <p>Whatsapp：+852 5647 2394</p>
            </a>
            <p>忠告：借錢梗要還，咪俾錢中介</p>
            <a href="tel:2682-8668">投訴熱線：+852 2887 7002</a>
          </div>

          <div className="footer-link-mob">
            <div className="d-flex flex-column">
              <p className="footer-header-mob">常用連結</p>
              {commonLink_list.map((item, index) => (
                <div key={index} className="mt-3 text-center">
                  <HashLink smooth to={item.url}>
                    {item.title}
                  </HashLink>
                </div>
              ))}
            </div>
            <div className="d-flex flex-column">
              <p className="footer-header-mob">貸款服務</p>
              {loanServices_list.map((item, index) => (
                <div key={index} className="mt-3 text-center">
                  <HashLink smooth to={item.url}>
                    {item.title}
                  </HashLink>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p>地址：尖沙咀山林道4號恒貿商業中心9樓3室</p>
            {/* <p>營業時間：10 : 00 - 22 : 00</p> */}
            <p>Money Lenders Licence: 1687/2022</p>
          </div>
          <div className="footer-statement">
            <p>註: 根據《放債人條例》年利率最高不超過48厘。</p>
            <p>供款期由6個月至個120月常見還款例子:</p>
            <p>
              年利率為30%情況下的貸款HK$10,000， 還款期數12期，每期還款額為
              HK$975
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Footer
