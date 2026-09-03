import React from "react";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "#00A84F",
                color: "#ffffff",
                padding: "10px 24px",
                marginTop: "40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "13px",
            }}
        >
            {/* Left side text */}
            <p style={{ margin: 0 }}>
                © {new Date().getFullYear()} Alumex PLC. All Rights Reserved.
            </p>

            {/* Center text
            <p style={{ margin: 0, fontStyle: "italic" }}>
                Ultimate in Aluminium Profiles
            </p> */}

            {/* Right side text */}
            <p style={{ margin: 0 }}>
                Alumex Profiles Digital Portal
            </p>
        </footer>
    );
};

export default Footer;