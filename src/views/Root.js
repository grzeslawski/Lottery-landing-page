import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Header from 'components/organisms/Header/Header';
import StartSection from 'components/templates/StartSection/StartSection';
import RulesSection from 'components/templates/RulesSection/RulesSection';
import WinnersSection from 'components/templates/WinnersSection/WinnersSection';
import FormSection from 'components/templates/FormSection/FormSection';
import ProductsSection from 'components/templates/ProductsSection/ProductsSection';
import AwardsSection from 'components/templates/AwardsSection/AwardsSection';
import ContactSection from 'components/templates/ContactSection/ContactSection';
import { BodyContent } from 'components/atoms/BodyContent/BodyContent';
import Footer from 'components/templates/Footer/Footer';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <BodyContent>
        <StartSection />
        <RulesSection />
        <ProductsSection />
        <AwardsSection />
        <WinnersSection />
        <FormSection />
        <ContactSection />
        <Footer />
      </BodyContent>
    </ThemeProvider>
  );
}

export default Root;
