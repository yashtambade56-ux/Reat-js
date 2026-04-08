import React from 'react';

function RightHeader() {
    return (
        <div className="right-header flex items-center space-x-6">
            <a href="#">Premium</a>
            <a href="#">Support</a>
            <a href="#">Download</a>

            <div className="border-l border-gray-600 h-6"></div>

            <a href="#" className="install-app">
                ↓ Install App
            </a>

            <button className="signup-btn">Sign up</button>
            <button className="login-btn">Log in</button>
        </div>
    );
}

export default RightHeader;