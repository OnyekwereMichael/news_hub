import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f8f8]">
      <Header />
      <NavBar />
      <main className=" ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 