import React, {useEffect, useRef, useState} from "react";
import style from './firstBlock.module.scss';
import {SvgIcon} from "../SvgIcon/SvgIcon";

import icon_1_white from '../../assets/img/png/icon_1_white.png';
import {IconLink} from "./IconLink/IconLink";
import mouse from '../../assets/img/png/mouse.png';
import useIntersectionObserver from "@react-hook/intersection-observer";
import clsx from "clsx";
import {time} from "../../consts/consts";
import coin1 from '../../assets/img/gif/coin1.gif';
import coin2 from '../../assets/img/gif/coin2.gif';
import mask from '../../assets/img/png/objects/not-animated/main_mobile_mask.png'

interface IIconLinks {
    src: any
    href: string
    text: string
}

const icon_0 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.31546 3.75C3.93691 1.8 5.4511 0 7.41956 0C9.16088 0 10.5994 1.425 10.5994 3.15V7.05C11.0536 7.05 11.5079 6.975 11.9621 6.975C12.4164 6.975 12.795 6.975 13.2492 7.05V3.15C13.2492 1.425 14.6877 0 16.429 0C18.3975 0 19.9117 1.8 19.6088 3.75L18.776 8.325C21.7287 9.6 24 11.85 24 14.625V16.35C24 18.675 22.4858 20.625 20.2902 21.9C18.0946 23.25 15.2177 24 11.9621 24C8.70662 24 5.82965 23.25 3.63407 21.9C1.5142 20.625 0 18.675 0 16.35V14.625C0 11.85 2.19558 9.6 5.14826 8.325L4.31546 3.75ZM17.6404 8.925L18.6246 3.525C18.8517 2.175 17.8675 0.9 16.429 0.9C15.2177 0.9 14.2334 1.875 14.2334 3.075V8.025C13.9306 7.95 13.5521 7.95 13.2492 7.95C12.795 7.95 12.4164 7.875 11.9621 7.875C11.5079 7.875 11.0536 7.875 10.5994 7.95C10.2965 7.95 9.91798 8.025 9.61514 8.025V3.15C9.61514 1.95 8.63091 0.975 7.41956 0.975C6.05678 0.975 4.99685 2.25 5.29968 3.6L6.28391 9C3.1041 10.2 0.984227 12.3 0.984227 14.7V16.425C0.984227 20.1 5.90536 23.1 11.9621 23.1C18.0189 23.1 22.9401 20.1 22.9401 16.425V14.7C23.0158 12.225 20.8959 10.125 17.6404 8.925Z"
          fill="#252535"/>
    <path
        d="M23.0144 16.35C23.0144 20.025 18.0933 23.025 12.0365 23.025C5.97973 23.025 1.05859 20.025 1.05859 16.35V14.625H23.0901V16.35H23.0144Z"
        fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M5.29834 3.6001C4.9955 2.2501 6.05544 0.975098 7.41822 0.975098C8.62957 0.975098 9.6138 1.9501 9.6138 3.1501V8.1001C10.3709 8.0251 11.128 7.9501 11.9608 7.9501C12.7179 7.9501 13.475 8.0251 14.2321 8.1001V3.1501C14.2321 1.9501 15.2163 0.975098 16.4277 0.975098C17.7905 0.975098 18.8504 2.2501 18.6233 3.6001L17.639 9.0001C20.8188 10.2001 23.0144 12.3001 23.0144 14.7001C23.0144 18.3751 18.0933 21.3751 12.0365 21.3751C5.97973 21.3751 1.05859 18.3751 1.05859 14.7001C1.05859 12.3001 3.17847 10.2001 6.35828 9.0001L5.29834 3.6001Z"
          fill="white"/>
    <path
        d="M8.9337 14.175C8.9337 15.15 8.40373 15.975 7.72234 15.975C7.04095 15.975 6.51099 15.15 6.51099 14.175C6.51099 13.2 7.04095 12.375 7.72234 12.375C8.40373 12.375 8.9337 13.2 8.9337 14.175Z"
        fill="#252535"/>
    <path
        d="M17.3375 14.175C17.3375 15.15 16.8075 15.975 16.1262 15.975C15.4448 15.975 14.9148 15.15 14.9148 14.175C14.9148 13.2 15.4448 12.375 16.1262 12.375C16.8075 12.375 17.3375 13.2 17.3375 14.175Z"
        fill="#252535"/>
</svg>;
const icon_2 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M9.63241 14.916L9.2685 20.0346C9.78916 20.0346 10.0147 19.811 10.2851 19.5424L12.7262 17.2095L17.7843 20.9137C18.712 21.4307 19.3656 21.1585 19.6158 20.0603L22.936 4.50263L22.9369 4.50171C23.2312 3.13038 22.441 2.59413 21.5372 2.93055L2.02133 10.4023C0.689413 10.9193 0.70958 11.6618 1.79491 11.9982L6.78433 13.5501L18.3737 6.29838C18.9192 5.93721 19.4151 6.13705 19.0072 6.49821L9.63241 14.916Z"
        fill="white"/>
</svg>
const icon_3 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M15 6.74995H18.3879C18.4175 6.74995 18.4465 6.74115 18.4712 6.72467C18.4959 6.70819 18.5151 6.68476 18.5264 6.65735C18.5378 6.62994 18.5408 6.59978 18.535 6.57068C18.5292 6.54158 18.5149 6.51485 18.4939 6.49388L14.5061 2.50598C14.4851 2.485 14.4584 2.47071 14.4293 2.46492C14.4002 2.45913 14.37 2.4621 14.3426 2.47345C14.3152 2.48481 14.2918 2.50403 14.2753 2.5287C14.2588 2.55337 14.25 2.58237 14.25 2.61204V5.99995C14.25 6.19886 14.329 6.38963 14.4697 6.53028C14.6103 6.67093 14.8011 6.74995 15 6.74995Z"
        fill="white"/>
    <path
        d="M18.75 8.25H15C14.4033 8.25 13.831 8.01295 13.409 7.59099C12.9871 7.16903 12.75 6.59674 12.75 6V2.25192C12.7503 2.15359 12.7312 2.05617 12.6938 1.96524C12.6564 1.8743 12.6014 1.79163 12.532 1.72197C12.4626 1.6523 12.3802 1.59701 12.2894 1.55925C12.1986 1.52149 12.1013 1.50201 12.0029 1.50192C10.2462 1.501 6 1.5 6 1.5C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V9C19.5 8.80109 19.421 8.61032 19.2803 8.46967C19.1397 8.32902 18.9489 8.25 18.75 8.25Z"
        fill="white"/>
</svg>

const iconLinks: IIconLinks[] = [
    {src: icon_0, href: '#', text: 'PancakeSwap'},
    {src: icon_1_white, href: '#', text: 'Dextools'},
    {src: icon_2, href: '#', text: 'Telegram'},
    {src: icon_3, href: '#', text: 'Docs'},
];

export const FirstBlock = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {isIntersecting} = useIntersectionObserver(
        ref,
        {
            threshold: 0.3
        }
    );
    const [intersected, setIntersected] = useState(false);
    const [intersected_1, setIntersected_1] = useState(false);
    const [intersected_2, setIntersected_2] = useState(false);
    const [intersected_3, setIntersected_3] = useState(false);

    useEffect(() => {
        if (isIntersecting) {
            setIntersected(true);
            setTimeout(() => {
                setIntersected_1(true);
            }, time);
            setTimeout(() => {
                setIntersected_2(true);
            }, 2 * time);
            setTimeout(() => {
                setIntersected_3(true);
            }, 3 * time);
        }
    }, [isIntersecting]);


    return (
        <section className={style.firstBlock} ref={ref}>

            <div className={style.mask}/>
            <img src={coin1} className={style.coin1}/>
            <img src={coin2} className={style.coin2}/>

            <div className={style.mask_mobile}
                 style={{
                     backgroundImage: `url(${mask})`,
                 }}
            />


            <div className={style.innerWrapper}>

                <div>
                    <h1 className={clsx({
                        [style.title]: true,
                        [style.title_intersected]: intersected,
                    })}
                    >LOREM IPSUM DOLOR SIT AMET, CONSECTETUR <span>ADIPISCING ELIT SED</span></h1>

                    <p className={clsx({
                        [style.text]: true,
                        [style.text_intersected]: intersected_1,
                    })}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className={clsx({
                        [style.buttons]: true,
                        [style.buttons_intersected]: intersected_2,
                    })}
                    >
                        <button>
                            <span>Buy $SPACECASH</span>
                            <SvgIcon icon="arrow-up"/>
                        </button>
                        <button>
                            <span>View Whitepaper</span>
                        </button>
                    </div>
                </div>


                <div className={clsx({
                    [style.bottom]: true,
                    [style.bottom_intersected]: intersected_3,
                })}
                >
                    <div className={style.left}>
                        {
                            iconLinks.map((iconLink, index) => (
                                <IconLink key={index} {...iconLink} isPng={index === 1 ? true : false}/>
                            ))
                        }
                    </div>
                    <a className={style.right}
                       href="#tokenomics">
                        <p>Scroll down</p>
                        <img src={mouse} alt=""/>
                    </a>
                </div>

            </div>
        </section>
    )
};