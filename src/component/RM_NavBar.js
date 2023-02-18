import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import "./navbar.css"
import logo from "../images/logo.png"
import ApplicationBtn from "./ApplicationBtn"
import { useMediaQuery } from "react-responsive"

const NavBar = ({ content,postData }) => {
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 990px)",
  })

  // const servicesDrpList = [
  //   { title: "免TU貸款", link: "/tu" },
  //   { title: "物業一按 | 二按", link: "/mortgage" },
  //   { title: "中小企周轉貸款", link: "/smeloan" },
  //   { title: "私人借貸 | 循環貸款", link: "/privateLending" },
  //   { title: "清卡數 | 稅貸", link: "/creditcard" },
  //   { title: "網上貸款 | 極速批核", link: "/onlineLoan" },
  // ]
  const servicesDrpList = [
    { title: content?.loanService[0].title, link: "/tu" },
    { title: content?.loanService[1].title, link: "/mortgage" },
    { title: content?.loanService[2].title, link: "/smeloan" },
    { title: content?.loanService[3].title, link: "/privateLending" },
    { title: content?.loanService[4].title, link: "/creditcard" },
    { title: content?.loanService[5].title, link: "/onlineLoan" },
  ]

  let servicesDrpList_id = 0
  const blogPostTitle = postData?postData[postData.length-1].title:""
  const blogPostOrdering = postData?postData[postData.length-1].ordering:""

  return (
    <div className="navbar-container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <div className="nav-logo-group">
            <Navbar.Brand href="/">
              <img className="nav-logo" src={logo} alt="" />
            </Navbar.Brand>
            <div className="nav-new_message">
              {/* {isMobileOrTablet && <ApplicationBtn isNavBtn={true} />} */}
              {isMobileOrTablet && <ApplicationBtn isNavBtn={true} />}
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-column">
            <div className="ms-auto d-flex align-items-center ">
              <a className="hotline" href="tel:2682-8668">
                <span className="pe-4">查詢熱線：2682 8668</span>
              </a>
              {!isMobileOrTablet && <ApplicationBtn isNavBtn={true} />}
            </div>

            <Nav className="ms-auto nav-text mt-2">
              <Nav.Link href="/">{content?.menu[0].label}</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="/aboutus">{content?.menu[1].label}</Nav.Link>
              <div className="dropdown-divider"></div>
              <NavDropdown
                title={content?.menu[2].label}
                id="nav-dropdown-service"
              >
                {servicesDrpList.map((item) => (
                  <div key={servicesDrpList_id++}>
                    <NavDropdown.Item href={item.link}>
                      {item.title}
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </div>
                ))}
              </NavDropdown>
              <div className="dropdown-divider"></div>

              <Nav.Link href="/application/loanprocess">
                {content?.menu[3].label}
              </Nav.Link>
              <div className="dropdown-divider"></div>
              <Nav.Link href={"/hottopics/" + blogPostOrdering + "/" + String(blogPostTitle).replace(/\s/g, "")}>{content?.menu[4].label}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
