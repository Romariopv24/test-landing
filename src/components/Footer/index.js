import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLinkItems,
    FooterLink
} from './FooterElements'

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to='/signing'>How it works</FooterLink>
                            <FooterLink to='/signing'>Testimonial</FooterLink>
                            <FooterLink to='/signing'>Careers</FooterLink>
                            <FooterLink to='/signing'>Investors</FooterLink>
                            <FooterLink to='/signing'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to='/signing'>How it works</FooterLink>
                            <FooterLink to='/signing'>Testimonial</FooterLink>
                            <FooterLink to='/signing'>Careers</FooterLink>
                            <FooterLink to='/signing'>Investors</FooterLink>
                            <FooterLink to='/signing'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to='/signing'>How it works</FooterLink>
                            <FooterLink to='/signing'>Testimonial</FooterLink>
                            <FooterLink to='/signing'>Careers</FooterLink>
                            <FooterLink to='/signing'>Investors</FooterLink>
                            <FooterLink to='/signing'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us</FooterLinkTitle>
                            <FooterLink to='/signing'>How it works</FooterLink>
                            <FooterLink to='/signing'>Testimonial</FooterLink>
                            <FooterLink to='/signing'>Careers</FooterLink>
                            <FooterLink to='/signing'>Investors</FooterLink>
                            <FooterLink to='/signing'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

