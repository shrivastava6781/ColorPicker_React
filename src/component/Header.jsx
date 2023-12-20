import { useState } from "react";
import "./Header.css"

const Header = (props) => {
    // Decalring all states
    const [headtext, setheadtext] = useState('Light');
    const [path, setpath] = useState('https://img.icons8.com/bubbles/50/sun-star.png');
    const [bgcolor, setbgcolor] = useState('white');
    const [txtcolor, settxtcolor] = useState('black');

    // Setting Header UI on black theme
    const changeTheme = () => {
        if (headtext === 'Light') {
            setheadtext('Dark');
            setpath('https://img.icons8.com/stickers/100/crescent-moon.png');
            setbgcolor('black');
            settxtcolor('white');
            props.updateTheme();
            document.body.style.backgroundColor = 'black';
        } else if (headtext === 'Dark') {
            setheadtext('Light');
            setpath('https://img.icons8.com/bubbles/50/sun-star.png');
            setbgcolor('white');
            settxtcolor('black');
            props.updateTheme();
            document.body.style.backgroundColor = '#f1f2f6';
        }
    }

    return (
        <header style={{ backgroundColor: bgcolor, color: txtcolor }}>
            <div className="head-container">
                <div className="logo">
                    <img src="https://img.icons8.com/color/48/rgb-circle-1--v1.png" alt="logo" />
                    <h1>Image Color Picker</h1>
                </div>
                <div className="theme" onClick={changeTheme}>
                    <img src={path} alt="night_theme" />
                    <p>{headtext} Mode</p>
                </div>
            </div>
        </header>
    );
};

export default Header;