import Banner from "./component/Banner"
import Footer from "./component/Footer"
import bg from "./images/loanService/loanservice_bg.png"
import { Helmet } from "react-helmet"
const Disclaimer = ({content}) => {
  return (
    <div className="disclaimer">
      <Helmet>
    <title>{content?.MT[10].metaTitle}</title>
    <meta name='description' content={content?.MT[10].metaDescription}/>
    <meta name='keywords' content={content?.MT[10].metaKeywords}/>
    </Helmet>
      <Banner name={"免責聲明"} name_ch={""} bg_url={bg} />
      <div className="container mt-5 mb-5">
        <h1 className="mb-5">免責聲明</h1>
        <p>
          瀏覽人士請注意本網頁所顯示的資料並非即時更新，Richmore Finance
          Limited(“本公司”)將盡力確保所提供資料的準確性及可靠性，但並不保證有關資料的準確性及可靠性，亦不會承擔因資料不正確或不完整而引起任何人士損失的所有法律責任。
        </p>
        <p>
          本網頁所介紹的產品和服務僅適用於法律上接受本公司提供此等產品和服務地區之任何人士，而對於法律上就本公司提供此等產品或服務有所限制的地區人士，本網頁的資料不應視作任何推介或招攬。
          請瀏覽人士自行負責了解和遵守當地的有關法律和法規。
          本網頁所記載的資料僅供一般參考之用，並不宜視作為專業意見。
          對於瀏覽此等資料的人士，在需要時應尋求適當的專業指導及協助。
        </p>
        <p>
          在法例容許的情況下，本公司不保證此網頁所提供的資料沒有任何錯誤、遺漏、不正確，或因本網頁之運作中斷、缺陷或傳送之阻延、或系統失誤而招致任何人士損失或開支，本公司概不負責。
        </p>
        <p>
          本網頁資料不具任何約束性及責任性，本公司可隨時取消或更改有關產品及服務而毋須事前作出通知。
          瀏覽人士使用本網即表示同意此網頁所載的任何聲明及政策。
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Disclaimer
