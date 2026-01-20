import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer-logo">Lionix Studio</h2>
            <ul className="footer-list">
                    <li className="footer-list-item">
                        <a href="" className="footer-link">Про нас</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="" className="footer-link">Проєкти</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="" className="footer-link">Послуги</a>
                    </li>
                    <li className="footer-list-item">
                        <a href="" className="footer-link">Блог</a>
                    </li>
                </ul>
                <div className="footer-contacts">
                    <div className="contact-item">
                        <span>📞</span>
                        <a href="tel:+48886409993">+48 886 409 993</a>
                    </div>
                    <div className="contact-item">
                        <span>✉️</span>
                        <a href="mailto:lionixstudio@protonmail.com">
                            lionixstudio@protonmail.com
                        </a>
                    </div>
                </div>
                <div className="socials">
                        <a href="https://github.com/lionixstudio" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://t.me/lionixstudio" target="_blank" rel="noreferrer" aria-label="Telegram">
                            <FaTelegram />
                        </a>
                        <a href="https://youtube.com/@StudioLNX" target="_blank" rel="noreferrer" aria-label="Youtube">
                            <FaYoutube />
                        </a>
                </div>
                <div className="copyright">© 2024-{new Date().getFullYear()} Lionix Studio Rights not reserved.</div>
        </footer>
    );
};

export default Footer;