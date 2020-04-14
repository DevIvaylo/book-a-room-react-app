import React from 'react';

const Header = ({children, header}) => {
    return (
        <header className={header}>
            {children}
        </header>
    )
};

export default Header;

Header.defaultProps = {
    header: 'defaultHeader'
};
