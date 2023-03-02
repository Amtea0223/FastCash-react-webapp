import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";
import logo from "../images/FC-logo.png";
import ApplicationBtn from "./ApplicationBtn";
import { useMediaQuery } from "react-responsive";

const NavBar = ({ content, postData, props }) => {
  const isMobileOrTablet = useMediaQuery({
    query: "(max-width: 990px)",
  });

  // const servicesDrpList = [
  //   { title: "免TU貸款", link: "/tu" },
  //   { title: "物業一按 | 二按", link: "/mortgage" },
  //   { title: "中小企周轉貸款", link: "/smeloan" },
  //   { title: "私人借貸 | 循環貸款", link: "/privateLending" },
  //   { title: "清卡數 | 稅貸", link: "/creditcard" },
  //   { title: "網上貸款 | 極速批核", link: "/onlineLoan" },
  // ]

  // const servicesDrpList = [
  //   { title: content?.loanService[0].title, link: "/tu" },
  //   { title: content?.loanService[1].title, link: "/mortgage" },
  //   { title: content?.loanService[2].title, link: "/smeloan" },
  //   { title: content?.loanService[3].title, link: "/privateLending" },
  //   { title: content?.loanService[4].title, link: "/creditcard" },
  //   { title: content?.loanService[5].title, link: "/onlineLoan" },
  // ]

  // const servicesDrpList = [
  //   { title: content?.loanService[0].title, link: "/tu" },
  //   { title: content?.loanService[1].title, link: "/mortgage" },
  //   { title: content?.loanService[2].title, link: "/smeloan" },
  //   { title: content?.loanService[3].title, link: "/privateLending" },
  //   { title: content?.loanService[4].title, link: "/creditcard" },
  //   { title: content?.loanService[5].title, link: "/onlineLoan" },
  // ];

  let servicesDrpList_id = 0;
  const blogPostTitle = postData ? postData[postData.length - 1].title : "";
  const blogPostOrdering = postData
    ? postData[postData.length - 1].ordering
    : "";

  return (
    <div className="navbar-container">
      <Navbar bg="white" variant="white" expand="xxl">
        <Container >
          <div className="nav-logo-group">
            <Navbar.Brand href="/">
              <img className="nav-logo" src={logo} alt="" />
            </Navbar.Brand>
            <div className="nav-new_message">
              {/* {isMobileOrTablet && <ApplicationBtn isNavBtn={true} />} */}
              {isMobileOrTablet}
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-column">
            <div className="ms-auto d-flex align-items-center ">
              {!isMobileOrTablet}
            </div>

            <Nav className="ms-auto nav-text mt-2 nav-link">
              <Nav.Link href="/privateLoan">私人貸款</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="/mortgage">按揭及業主貸款</Nav.Link>
              <Nav.Link href="/balance">結餘轉戶</Nav.Link>
              <Nav.Link href={"/hottopics/" + blogPostOrdering + "/" + String(blogPostTitle).replace(/\s/g, "")}>貸款迷思</Nav.Link>
              <Nav.Link href="/about">關於 FAST CASH</Nav.Link>
              <Nav.Link href="/contact">聯絡我們</Nav.Link>
              <Nav.Link href="https://fastcash-proj.web.app/">登入</Nav.Link>
              {/* <div className="dropdown-divider"></div> */}
              {/* <Nav.Link href={"/hottopics/" + blogPostOrdering + "/" + String(blogPostTitle).replace(/\s/g, "")}>{content?.menu[4].label}</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
