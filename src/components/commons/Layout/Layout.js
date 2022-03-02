import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '../../../assets/css/Layout.css';

const Layout = ({ children }) => {
    return(
    <div className="layout">
        <Header className="layout-header bordered" />
        <main className="layout-main bordered">
            <section className="layout-content">{children}</section>
        </main>
        <Footer />
    </div>
    );
}

export default Layout;