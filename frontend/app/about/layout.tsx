import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

type childrenProps = {
  children: React.ReactNode;
};

const layout = ({ children }: childrenProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
