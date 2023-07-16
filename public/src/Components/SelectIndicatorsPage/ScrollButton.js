import React, {useState} from 'react';

const ScrollButton = () =>{
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className="button" id="scroll-to-top"
                style={{display: visible ? 'inline' : 'none'}}
                onClick={scrollToTop}
        >
            Scroll to top
        </button>
    );
}

export default ScrollButton;