import "./footer.css";
import icon from "../images/logo.png";
import { HashLink } from "react-router-hash-link";
import { useMediaQuery } from "react-responsive";
import logo from "../images/FC-logo.png";
const Footer = () => {
  const isMobileTablet = useMediaQuery({ query: "(max-width: 1212px)" });

  //original
  // const commonLink_list = [
  //   {
  //     title: "主頁",
  //     url: "/",
  //   },
  //   {
  //     title: "關於我們",
  //     url: "/aboutus",
  //   },
  //   {
  //     title: "免責聲明",
  //     url: "/disclaimer",
  //   },
  //   {
  //     title: "放債人條例",
  //     url: "/ordinance",
  //   },
  // ]
  const commonLink1_list = [
    {
      title: "貸款迷思",
      url: "/question",
    },
    {
      title: "聯絡我們",
      url: "/contact",
    },
  ];

  const commonLink2_list = [
    {
      title: "免責聲明",
      url: "/privateLoan",
    },
    {
      title: "隱私政策",
      url: "/privateLoan",
    },
    {
      title: "個人資料收集聲明",
      url: "/privateLoan",
    },
    {
      title: "放債人條例",
      url: "/privateLoan",
    },
  ];

  const loanServices_list = [
    {
      title: "私人貸款",
      url: "/privateLoan",
    },
    {
      title: "按揭及業主貸款",
      url: "/mortgage",
    },
    {
      title: "結餘轉戶",
      url: "/balance",
    },
    {
      title: "申請表格",
      url: "/application",
    },
  ];

  return (
    <div className="footer">
      {!isMobileTablet && (
        <div className="footer-container">
          {/* <div className="ft1">
            <img className="footer-icon" src={icon} alt="" />
          </div> */}
          <img className="footer-logo" src={logo} alt="" />
          <div className="ft1" >
            <div  style={{ marginleft: "90px" }}>
              {/* <p>常用連結</p> */}
              {loanServices_list.map((item, index) => (
                <div key={index} className="mt-3 ft1-loanservices">
                  <HashLink smooth to={item.url}>
                    {item.title}
                  </HashLink>
                </div>
              ))}
            </div>

            <div style={{ marginLeft: "90px" }}>
              {commonLink1_list.map((item, index) => (
                <div key={index} className="mt-3 ft1-commonLink1">
                  <HashLink smooth to={item.url}>
                    {item.title}
                  </HashLink>
                </div>
              ))}
              {commonLink2_list.map((item, index) => (
                <div key={index} className="mt-3 ft1-commonLink2">
                  <HashLink smooth to={item.url}>
                    {item.title}
                  </HashLink>
                </div>
              ))}
            </div>
          </div>

          <div className="ft2">
            <p style={{color:"#77bf27"}}>FAST CASH 快易錢</p>
            <span>放債人牌照號碼： 1726/2021</span>
            <span>尖沙咀山林道4號恒貿商業中心9樓3室</span>
            {/* <p>放債人牌照號碼： 1726/2021</p> */}
            {/* <p>尖沙咀山林道4號恒貿商業中心9樓3室</p> */}
            <a href="tel:2682-8668">
              <span>查詢電話：+852 2887 7002</span>
            </a>
            <a href="tel:9363-4203">
              <span> WhatsApp：+852 5647 2394</span>
            </a>
          </div>

          <div className="ft3">
            <p>備註</p>
            <p>
              FAST CASH 快易錢還款期為6至60個月之間的私人貸款。實際 年利率介乎
              3%至
              48%，將視乎個別情況而定。以下為參考例子：假如你的貸款額為$50,000
              ，還款期12個月，實際年利率(APR)3.8%，那每月還款額應為
              HK$4,253，而總還款額則是HK$51,036
            </p>
          </div>
          <div className="ft4">
            <span style={{fontSize:"20px"}}>忠告：借錢梗要還，咪俾錢中介</span>
            <p>© Copyright© 快易錢 Fast Profit Finance Ltd. All Rights Reserved.</p>
            {/* <div className="footer-statement">
              <p>註: 根據《放債人條例》年利率最高不超過48厘。</p>
              <p>供款期由6個月至個120月常見還款例子:</p>
              <p>
                年利率為30%情況下的貸款HK$10,000， 還款期數12期，每期還款額為
                HK$975
              </p>
            </div> */}
          </div>
          {/* <div className="ft6"></div> */}
        </div>
      )}
      {isMobileTablet && (
        <div className="footer-container-mob">
          <img className="footer-icon" src={icon} alt="" />
          <div className="footer-contact-mob">
            <a href="tel:2682-8668">
              <p>查詢熱線：+852 2682 8668</p>
            </a>
            <a href="tel:9363-4203">
              <p>Whatsapp：+852 9363 4203</p>
            </a>
            <p>忠告：借錢梗要還，咪俾錢中介</p>
            <a href="tel:2682-8668">投訴熱線：+852 2682 8668</a>
          </div>

          <div className="footer-link-mob">
            <div className="d-flex flex-column">
              <p className="footer-header-mob">常用連結</p>
              {commonLink2_list.map((item, index) => (
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
            <p>地址：佐敦彌敦道 208-212 號四海大廈7樓701室</p>
            <p>營業時間：10 : 00 - 22 : 00</p>
            <p>電郵: cs@rmf.hk | Money Lenders Licence: 2179/2022</p>
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
  );
};

export default Footer;
