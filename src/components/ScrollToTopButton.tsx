import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false)
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="topToBtn fixed bottom-10 left-10" style={showTopBtn ? { display: 'flex' } : { display: 'none' }}>
                <FaAngleUp onClick={goToTop} size={20} className={"hover:cursor-pointer dark:text-white text-primary"} />
            </div>
        </>
    )
}