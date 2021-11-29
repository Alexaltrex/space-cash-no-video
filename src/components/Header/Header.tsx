import React, {FC} from "react";
import style from './header.module.scss';
import {SvgIcon} from "../SvgIcon/SvgIcon";
import {HashLink} from 'react-router-hash-link';

export interface IHeader {
    setBurgerIsOpen: () => void
    isBurgerIsOpen: boolean
}

export interface ILink {
    text: string
    link: string
}

export const links: ILink[] = [
    {
        text: 'Tokenomics',
        link: 'tokenomics',
    },
    {
        text: 'Roadmap',
        link: 'roadmap',
    },
    {
        text: 'How to buy',
        link: 'how to buy',
    },
    {
        text: 'Whitepaper',
        link: 'whitepaper',
    },
];

const logo = <svg width="178" height="45" viewBox="0 0 178 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9237 23.4205C29.9237 30.8546 23.8972 36.8811 16.4631 36.8811C14.6019 36.8811 12.8288 36.5034 11.2166 35.8203C9.12367 34.9337 7.30152 33.5326 5.90883 31.7757C4.08921 29.4803 3.00256 26.5772 3.00256 23.4205C3.00256 15.9865 9.02905 9.95996 16.4631 9.95996C18.5347 9.95996 20.497 10.4279 22.2499 11.2639C23.0138 11.6281 23.7378 12.0622 24.414 12.5579C27.7548 15.0073 29.9237 18.9607 29.9237 23.4205ZM16.4631 14.7404C21.2571 14.7404 25.1433 18.6267 25.1433 23.4205C25.1433 24.1987 25.041 24.9529 24.8489 25.6705C24.0522 28.6473 21.7127 30.9934 18.7396 31.7992C18.0142 31.9958 17.2509 32.1007 16.4631 32.1007C12.731 32.1007 9.5489 29.7452 8.32245 26.4397C7.97357 25.4994 7.78297 24.4822 7.78297 23.4205C7.78297 23.0906 7.80138 22.7649 7.83723 22.4444C8.07235 20.3433 9.05749 18.4689 10.5189 17.0951C12.072 15.6349 14.1631 14.7404 16.4631 14.7404Z" fill="url(#paint0_linear_327_971)"/>
    <path d="M20.8923 29.0275C20.8923 30.0177 20.4213 30.8148 19.4792 31.4187C19.2603 31.5628 19.0137 31.6897 18.7395 31.7994C21.7126 30.9936 24.0522 28.6475 24.8489 25.6708C24.6746 25.3508 24.4667 25.0566 24.2254 24.7885C23.3801 23.8224 22.3535 23.1099 21.146 22.6509C19.9382 22.1679 18.3923 21.7089 16.5084 21.2742C15.1317 20.936 14.0447 20.634 13.2476 20.3685C12.4506 20.1028 11.7864 19.7403 11.255 19.2815C10.7478 18.8226 10.4941 18.2307 10.4941 17.5062C10.4941 17.3655 10.5023 17.2286 10.5187 17.0955C9.05748 18.4691 8.07228 20.3436 7.83716 22.4447C8.53126 23.0458 9.30824 23.5131 10.168 23.8465C11.3758 24.3054 12.9458 24.7644 14.878 25.2232C16.2548 25.5614 17.3417 25.8634 18.1388 26.1291C18.9358 26.3948 19.588 26.7691 20.0952 27.2522C20.6266 27.7111 20.8923 28.3028 20.8923 29.0275Z" fill="url(#paint1_linear_327_971)"/>
    <path d="M7.08856 21.7088C6.24319 20.7184 5.82049 19.39 5.82049 17.7235C5.82049 16.3225 6.18845 15.0456 6.93723 13.9104C4.50596 16.3456 3.00256 19.7076 3.00256 23.4206C3.00256 26.5773 4.08921 29.4802 5.90883 31.7757C7.30152 33.5327 9.12367 34.9337 11.2166 35.8204C12.7575 36.4731 14.4452 36.8471 16.2165 36.8789C16.2854 36.8802 16.3545 36.881 16.4236 36.8812C19.1334 36.8791 21.5654 35.6895 23.2271 33.8048C24.6183 32.2268 25.4699 30.1613 25.4926 27.8977C25.4113 27.0517 25.1967 26.3094 24.8489 25.6706C24.0522 28.6474 21.7127 30.9933 18.7396 31.7993C18.0142 31.9959 17.2509 32.1008 16.4631 32.1008C12.731 32.1008 9.5489 29.7453 8.32245 26.4398C8.11825 25.8894 7.96827 25.3127 7.879 24.7162C7.81574 24.2936 7.78297 23.8609 7.78297 23.4206C7.78297 23.0906 7.80138 22.765 7.83723 22.4445C7.57592 22.2182 7.32638 21.973 7.08856 21.7088Z" fill="url(#paint2_linear_327_971)"/>
    <path d="M41.0743 31.2761C39.8402 31.2761 38.6424 31.1237 37.481 30.8188C36.3195 30.5139 35.3759 30.1074 34.6499 29.5993L36.0654 26.4198C36.7478 26.8698 37.539 27.2328 38.4392 27.5087C39.3393 27.7845 40.225 27.9223 41.096 27.9223C42.7511 27.9223 43.5786 27.5087 43.5786 26.681C43.5786 26.2455 43.3391 25.9261 42.8601 25.7229C42.3955 25.5051 41.6404 25.28 40.5951 25.0477C39.4482 24.801 38.49 24.5396 37.7205 24.2638C36.951 23.9733 36.2904 23.5161 35.7388 22.8919C35.1871 22.2676 34.9113 21.4255 34.9113 20.3655C34.9113 19.4365 35.1653 18.6016 35.6734 17.8612C36.1815 17.1062 36.9365 16.511 37.9383 16.0755C38.9546 15.6399 40.1959 15.4221 41.6623 15.4221C42.6641 15.4221 43.6512 15.5383 44.624 15.7706C45.5967 15.9883 46.4532 16.315 47.1937 16.7505L45.8653 19.9519C44.4135 19.1679 43.0051 18.7758 41.6404 18.7758C40.7839 18.7758 40.1596 18.9065 39.7676 19.1679C39.3756 19.4147 39.1796 19.7413 39.1796 20.1479C39.1796 20.5543 39.4119 20.8592 39.8765 21.0624C40.3411 21.2658 41.0888 21.4762 42.1196 21.6941C43.2811 21.9408 44.2392 22.2094 44.9942 22.4997C45.7637 22.7757 46.4243 23.2257 46.976 23.8499C47.5421 24.4598 47.8253 25.2946 47.8253 26.3544C47.8253 27.269 47.5712 28.0966 47.063 28.8371C46.5549 29.5775 45.7927 30.1727 44.7764 30.6228C43.7602 31.0583 42.5261 31.2761 41.0743 31.2761Z" fill="white"/>
    <path d="M56.7858 15.7271C58.1651 15.7271 59.3627 15.9593 60.3791 16.424C61.3954 16.8739 62.1793 17.5273 62.731 18.3838C63.2827 19.2259 63.5586 20.2205 63.5586 21.3674C63.5586 22.5144 63.2827 23.5089 62.731 24.3509C62.1793 25.193 61.3954 25.8463 60.3791 26.3109C59.3627 26.7609 58.1651 26.986 56.7858 26.986H54.1289V30.9713H49.817V15.7271H56.7858ZM56.5244 23.5888C57.4101 23.5888 58.0779 23.4 58.528 23.0225C58.9781 22.6305 59.203 22.0789 59.203 21.3674C59.203 20.656 58.9781 20.1044 58.528 19.7124C58.0779 19.3204 57.4101 19.1243 56.5244 19.1243H54.1289V23.5888H56.5244Z" fill="white"/>
    <path d="M75.109 28.0096H68.6629L67.4651 30.9713H63.0662L69.7953 15.7271H74.042L80.793 30.9713H76.3068L75.109 28.0096ZM73.846 24.8301L71.886 19.9519L69.9259 24.8301H73.846Z" fill="white"/>
    <path d="M89.403 31.2761C87.806 31.2761 86.3687 30.9422 85.0911 30.2744C83.8279 29.5919 82.8335 28.6483 82.1075 27.4433C81.3816 26.2383 81.0187 24.8736 81.0187 23.3491C81.0187 21.8247 81.3816 20.46 82.1075 19.255C82.8335 18.05 83.8279 17.1136 85.0911 16.4456C86.3687 15.7633 87.806 15.4221 89.403 15.4221C90.7967 15.4221 92.0527 15.6689 93.1705 16.1625C94.2884 16.6562 95.2176 17.3675 95.958 18.2967L93.214 20.7794C92.2268 19.5888 91.029 18.9936 89.6208 18.9936C88.7933 18.9936 88.0527 19.1751 87.3996 19.538C86.7607 19.9009 86.2598 20.4165 85.8969 21.0843C85.5484 21.7376 85.3741 22.4925 85.3741 23.3491C85.3741 24.2056 85.5484 24.9679 85.8969 25.6357C86.2598 26.289 86.7607 26.7972 87.3996 27.1602C88.0527 27.5231 88.7933 27.7047 89.6208 27.7047C91.029 27.7047 92.2268 27.1093 93.214 25.9189L95.958 28.4015C95.2176 29.3307 94.2884 30.0421 93.1705 30.5357C92.0527 31.0292 90.7967 31.2761 89.403 31.2761Z" fill="white"/>
    <path d="M110.119 27.6393V30.9713H97.8806V15.7271H109.836V19.059H102.149V21.6287H108.922V24.8518H102.149V27.6393H110.119Z" fill="white"/>
    <path d="M120.113 31.2761C118.516 31.2761 117.078 30.9422 115.801 30.2744C114.538 29.5919 113.543 28.6483 112.817 27.4433C112.091 26.2383 111.728 24.8736 111.728 23.3491C111.728 21.8247 112.091 20.46 112.817 19.255C113.543 18.05 114.538 17.1136 115.801 16.4456C117.078 15.7633 118.516 15.4221 120.113 15.4221C121.506 15.4221 122.762 15.6689 123.88 16.1625C124.998 16.6562 125.927 17.3675 126.668 18.2967L123.924 20.7794C122.936 19.5888 121.739 18.9936 120.33 18.9936C119.503 18.9936 118.762 19.1751 118.109 19.538C117.47 19.9009 116.969 20.4165 116.607 21.0843C116.258 21.7376 116.084 22.4925 116.084 23.3491C116.084 24.2056 116.258 24.9679 116.607 25.6357C116.969 26.289 117.47 26.7972 118.109 27.1602C118.762 27.5231 119.503 27.7047 120.33 27.7047C121.739 27.7047 122.936 27.1093 123.924 25.9189L126.668 28.4015C125.927 29.3307 124.998 30.0421 123.88 30.5357C122.762 31.0292 121.506 31.2761 120.113 31.2761Z" fill="url(#paint3_linear_327_971)"/>
    <path d="M138.549 28.0096H132.102L130.905 30.9713H126.506L133.235 15.7271H137.482L144.233 30.9713H139.746L138.549 28.0096ZM137.286 24.8301L135.326 19.9519L133.366 24.8301H137.286Z" fill="url(#paint4_linear_327_971)"/>
    <path d="M150.812 31.2761C149.578 31.2761 148.38 31.1237 147.219 30.8188C146.058 30.5139 145.114 30.1074 144.388 29.5993L145.803 26.4198C146.486 26.8698 147.277 27.2328 148.177 27.5087C149.077 27.7845 149.963 27.9223 150.834 27.9223C152.489 27.9223 153.317 27.5087 153.317 26.681C153.317 26.2455 153.077 25.9261 152.598 25.7229C152.133 25.5051 151.378 25.28 150.333 25.0477C149.186 24.801 148.228 24.5396 147.459 24.2638C146.689 23.9733 146.028 23.5161 145.477 22.8919C144.925 22.2676 144.649 21.4255 144.649 20.3655C144.649 19.4365 144.903 18.6016 145.411 17.8612C145.92 17.1062 146.675 16.511 147.676 16.0755C148.693 15.6399 149.934 15.4221 151.4 15.4221C152.402 15.4221 153.388 15.5383 154.362 15.7706C155.334 15.9883 156.192 16.315 156.932 16.7505L155.604 19.9519C154.152 19.1679 152.743 18.7758 151.378 18.7758C150.522 18.7758 149.898 18.9065 149.506 19.1679C149.114 19.4147 148.918 19.7413 148.918 20.1479C148.918 20.5543 149.15 20.8592 149.614 21.0624C150.079 21.2658 150.827 21.4762 151.858 21.6941C153.019 21.9408 153.976 22.2094 154.731 22.4997C155.501 22.7757 156.163 23.2257 156.714 23.8499C157.281 24.4598 157.564 25.2946 157.564 26.3544C157.564 27.269 157.31 28.0966 156.801 28.8371C156.293 29.5775 155.531 30.1727 154.515 30.6228C153.498 31.0583 152.264 31.2761 150.812 31.2761Z" fill="url(#paint5_linear_327_971)"/>
    <path d="M174.059 15.7271V30.9713H169.747V25.0261H163.867V30.9713H159.556V15.7271H163.867V21.4546H169.747V15.7271H174.059Z" fill="url(#paint6_linear_327_971)"/>
    <defs>
        <linearGradient id="paint0_linear_327_971" x1="26.5373" y1="30.616" x2="15.6936" y2="12.8645" gradientUnits="userSpaceOnUse">
            <stop stop-color="#65C7A4"/>
            <stop offset="1" stop-color="#B4EA71"/>
        </linearGradient>
        <linearGradient id="paint1_linear_327_971" x1="5.17128" y1="19.5317" x2="22.6014" y2="29.0098" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9FD868"/>
            <stop offset="1" stop-color="#71DA64"/>
        </linearGradient>
        <linearGradient id="paint2_linear_327_971" x1="21.1206" y1="35.579" x2="5.92358" y2="21.3701" gradientUnits="userSpaceOnUse">
            <stop stop-color="#74DF56"/>
            <stop offset="1" stop-color="#65C7A4"/>
        </linearGradient>
        <linearGradient id="paint3_linear_327_971" x1="97.2216" y1="25.0609" x2="121.26" y2="63.0419" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9FD868"/>
            <stop offset="1" stop-color="#71DA64"/>
        </linearGradient>
        <linearGradient id="paint4_linear_327_971" x1="97.2217" y1="25.0609" x2="121.26" y2="63.0419" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9FD868"/>
            <stop offset="1" stop-color="#71DA64"/>
        </linearGradient>
        <linearGradient id="paint5_linear_327_971" x1="97.2217" y1="25.0609" x2="121.26" y2="63.0419" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9FD868"/>
            <stop offset="1" stop-color="#71DA64"/>
        </linearGradient>
        <linearGradient id="paint6_linear_327_971" x1="97.2216" y1="25.0609" x2="121.26" y2="63.0419" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9FD868"/>
            <stop offset="1" stop-color="#71DA64"/>
        </linearGradient>
    </defs>
</svg>;


export const Header: FC<IHeader> = ({setBurgerIsOpen, isBurgerIsOpen}) => {
    return (
        <header className={style.header}>
            <div className={style.innerWrapper}>

                <div className={style.leftBlock}>
                    <a className={style.logo} href="/">
                        {logo}
                    </a>

                    <nav className={style.nav}>
                        {
                            links.map(
                                ({text, link}, index) => (
                                    <HashLink className={style.link}
                                       key={index}
                                       to={`/#${link}`}
                                    >
                                        {text}
                                    </HashLink>
                                )
                            )
                        }
                    </nav>
                </div>

                <div className={style.rightBlock}>

                    <button className={style.burgerButton}
                            onClick={() => setBurgerIsOpen()}
                    >
                        {
                            isBurgerIsOpen
                                ? <SvgIcon icon='close'/>
                                : <SvgIcon icon='burger'/>
                        }
                    </button>

                    <button className={style.button}>
                        Your Dashboard
                    </button>
                </div>

            </div>

        </header>
    )
};