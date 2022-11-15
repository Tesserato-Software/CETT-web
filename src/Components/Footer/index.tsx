import React from 'react'
import { FooterContainer } from './style'
import LogoBranco from "../../assets/logo_branco_transparent.png";

export const Footer = () => {
    return (
      <FooterContainer>
          <img src={LogoBranco} />
          <p>All rights reserved</p>
      </FooterContainer>
    )
}
