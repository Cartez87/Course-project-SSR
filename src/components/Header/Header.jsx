import React, { useState } from "react";

import Container from 'react-bootstrap/Container';

import HeaderImage from '../HeaderImage';
import Logo from '../Logo';
import MyModal from '../Modal';
import SearchForm from '../SearchForm';
import Button from '../Button';
import CustomForm from '../CustomForm';

import { searchMovie } from '../../store/movieActions';
import './Header.scss';

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return(
    <section className="header-section">
      <HeaderImage />
      <Container>
      <div className="top-panel d-flex justify-content-between align-items-center">
        <Logo />
        <Button 
          color="SECONDARY"
          onClick={() => setModalShow(true)}
        >
            + Add movie
        </Button>
        <MyModal
          show={modalShow}
          size="lg"
          title="ADD MOVIE"
          onHide={() => setModalShow(false)}
        >
        <CustomForm />
      </MyModal>
      </div>
      <div className="form-wrap">
        <h1>FIND YOUR MOViE</h1>
        <SearchForm />
      </div>
      </Container>
    </section>
  );
}

export default Header;