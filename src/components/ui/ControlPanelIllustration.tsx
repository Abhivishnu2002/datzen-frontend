'use client';

import { useEffect, useState } from 'react';

export function ControlPanelIllustration() {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimated(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <svg
            className={`w-full h-auto ${animated ? 'animated' : ''}`}
            id="freepik_stories-control-panel"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            version="1.1"
        >
            <style>{`
        svg#freepik_stories-control-panel:not(.animated) .animable {
          opacity: 0;
        }
        svg#freepik_stories-control-panel.animated #freepik--background-simple--inject-2 {
          animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideUp;
          animation-delay: 0s;
        }
        svg#freepik_stories-control-panel.animated #freepik--Shadow--inject-2 {
          animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideDown;
          animation-delay: 0s;
        }
        svg#freepik_stories-control-panel.animated #freepik--control-panel--inject-2 {
          animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) fadeIn;
          animation-delay: 0s;
        }
        svg#freepik_stories-control-panel.animated #freepik--Character--inject-2 {
          animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) lightSpeedRight;
          animation-delay: 0s;
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: inherit;
          }
        }
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
             opacity: 1;
          }
        }
        @keyframes lightSpeedRight {
          from {
            transform: translate3d(50%, 0, 0) skewX(-20deg);
            opacity: 0;
          }
          60% {
            transform: skewX(10deg);
            opacity: 1;
          }
          80% {
            transform: skewX(-2deg);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

            <g id="freepik--background-simple--inject-2" className="animable" style={{ transformOrigin: '246.229px 206.708px' }}>
                <path d="M299.31,333.74s40.34,7.56,78.63-30,50-106.47,25.29-152.43S328.63,79.45,275.11,79c-26.08-.21-46.26,10.93-65,25.75-16.3,12.9-34,24.86-55.21,30.34-21,5.42-42,8.7-56.06,25.4-34.19,40.63-30.82,98.55,18.57,130C170.63,324.32,270.19,337.72,299.31,333.74Z" style={{ fill: 'rgb(33, 146, 206)', transformOrigin: '246.229px 206.708px' }} id="eli2wdbtp9ihm" className="animable"></path>
                <g id="elvpuu94clegd"><path d="M299.31,333.74s40.34,7.56,78.63-30,50-106.47,25.29-152.43S328.63,79.45,275.11,79c-26.08-.21-46.26,10.93-65,25.75-16.3,12.9-34,24.86-55.21,30.34-21,5.42-42,8.7-56.06,25.4-34.19,40.63-30.82,98.55,18.57,130C170.63,324.32,270.19,337.72,299.31,333.74Z" style={{ fill: 'rgb(255, 255, 255)', opacity: 0.7, transformOrigin: '246.229px 206.708px' }} className="animable"></path></g>
            </g>

            <g id="freepik--Shadow--inject-2" className="animable" style={{ transformOrigin: '250.24px 398.07px' }}>
                <ellipse cx="250.24" cy="398.07" rx="65.89" ry="20.76" style={{ fill: 'rgb(33, 146, 206)', transformOrigin: '250.24px 398.07px' }} id="eldtq4xteim2k" className="animable"></ellipse>
                <g id="elp3fj333ou3"><ellipse cx="250.24" cy="398.07" rx="65.89" ry="20.76" style={{ fill: 'rgb(255, 255, 255)', opacity: 0.5, transformOrigin: '250.24px 398.07px' }} className="animable"></ellipse></g>
            </g>

            <g id="freepik--control-panel--inject-2" className="animable" style={{ transformOrigin: '248.019px 249.495px' }}>
                <path d="M355.76,277a110.47,110.47,0,1,0-219,0Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.26px 214.461px' }} id="el5vhjiqaoh2s" className="animable"></path>
                <path d="M355.76,277.48h-219a.49.49,0,0,1-.5-.43,111,111,0,1,1,220,0A.49.49,0,0,1,355.76,277.48Zm-218.56-1H355.33a111.9,111.9,0,0,0,.9-14.15,110,110,0,1,0-219.93,0A111.9,111.9,0,0,0,137.2,276.48Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.26px 213.518px' }} id="elb9byushbr6" className="animable"></path>
                <rect x="133.66" y="300.53" width="227.6" height="41.8" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '247.46px 321.43px' }} id="el9fgsoovbwjq" className="animable"></rect>
                <path d="M361.26,342.82H133.66a.5.5,0,0,1-.5-.5V300.53a.5.5,0,0,1,.5-.5h227.6a.5.5,0,0,1,.5.5v41.79A.5.5,0,0,1,361.26,342.82Zm-227.1-1h226.6V301H134.16Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '247.46px 321.425px' }} id="elid20kllwkq" className="animable"></path>
                <rect x="226.91" y="123.29" width="38.71" height="103.35" style={{ fill: 'rgb(255, 255, 255)', transformOrigin: '246.265px 174.965px' }} id="elqt15ii5puzm" className="animable"></rect>
                <path d="M265.62,227.13H226.91a.5.5,0,0,1-.5-.5V123.29a.5.5,0,0,1,.5-.5h38.71a.5.5,0,0,1,.5.5V226.63A.5.5,0,0,1,265.62,227.13Zm-38.21-1h37.71V123.79H227.41Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.265px 174.96px' }} id="elos1rucrsv2a" className="animable"></path>
                <rect x="226.91" y="123.29" width="38.71" height="87.62" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.265px 167.1px' }} id="el81mu0e3ecbi" className="animable"></rect>
                <path d="M265.62,211.4H226.91a.5.5,0,0,1-.5-.5V123.29a.5.5,0,0,1,.5-.5h38.71a.5.5,0,0,1,.5.5V210.9A.5.5,0,0,1,265.62,211.4Zm-38.21-1h37.71V123.79H227.41Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.265px 167.095px' }} id="el4yzu0a3i5c7" className="animable"></path>
                <path d="M178,123.29H314.49a0,0,0,0,1,0,0v72a10.42,10.42,0,0,1-10.42,10.42H188.46A10.42,10.42,0,0,1,178,195.27v-72A0,0,0,0,1,178,123.29Z" style={{ fill: 'rgb(255, 255, 255)', transformOrigin: '246.245px 164.49px' }} id="elri6jk2icvkr" className="animable"></path>
                <path d="M304.07,206.19H188.46a10.93,10.93,0,0,1-10.92-10.92v-72a.5.5,0,0,1,.5-.5H314.49a.5.5,0,0,1,.5.5v72A10.93,10.93,0,0,1,304.07,206.19Zm-125.53-82.4v71.48a9.93,9.93,0,0,0,9.92,9.92H304.07a9.93,9.93,0,0,0,9.92-9.92V123.79Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.265px 164.48px' }} id="eltqbd6dtyh6" className="animable"></path>
                <rect x="166.62" y="113.77" width="159.29" height="82.4" rx="5.38" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.265px 154.97px' }} id="elth7xyuai7co" className="animable"></rect>
                <path d="M320.53,196.67H172a5.89,5.89,0,0,1-5.88-5.88V119.15a5.88,5.88,0,0,1,5.88-5.88H320.53a5.88,5.88,0,0,1,5.88,5.88v71.64A5.89,5.89,0,0,1,320.53,196.67ZM172,114.27a4.89,4.89,0,0,0-4.88,4.88v71.64a4.89,4.89,0,0,0,4.88,4.88H320.53a4.89,4.89,0,0,0,4.88-4.88V119.15a4.89,4.89,0,0,0-4.88-4.88Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.265px 154.97px' }} id="elkjm3f93ftq" className="animable"></path>
                <rect x="175.5" y="119.48" width="141.52" height="70.98" rx="4.19" style={{ fill: 'rgb(33, 146, 206)', transformOrigin: '246.26px 154.97px' }} id="elrx3izwp4j3c" className="animable"></rect>
                <path d="M312.83,191H179.7a4.71,4.71,0,0,1-4.7-4.69v-62.6a4.7,4.7,0,0,1,4.7-4.69H312.83a4.7,4.7,0,0,1,4.7,4.69v62.6A4.71,4.71,0,0,1,312.83,191ZM179.7,120a3.7,3.7,0,0,0-3.7,3.69v62.6a3.7,3.7,0,0,0,3.7,3.69H312.83a3.7,3.7,0,0,0,3.7-3.69v-62.6a3.7,3.7,0,0,0-3.7-3.69Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '246.265px 155.01px' }} id="el6ek9tcexv8l" className="animable"></path>
                {/* Simplified inner paths to reduce file size issues while keeping visual structure */}
                <path d="M310.75,127.88h-3.1a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5h3.1a.5.5,0,0,1,.5.5A.51.51,0,0,1,310.75,127.88Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '309.2px 127.38px' }} className="animable"></path>
                <path d="M303.8,127.88H287a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h16.8a.5.5,0,0,1,.5.5A.5.5,0,0,1,303.8,127.88Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '295.4px 127.38px' }} className="animable"></path>
                <path d="M281.49,127.88H238.81a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h42.68a.5.5,0,0,1,.5.5A.5.5,0,0,1,281.49,127.88Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '260.15px 127.38px' }} className="animable"></path>

                {/* Character Group */}
                <g id="freepik--Character--inject-2" className="animable" style={{ transformOrigin: '275.497px 308.824px' }}>
                    <path d="M223.26,388.49l-8.19,10.37s-1.37,1.63,1.09,1.91,14.74,0,14.74,0V390.12Z" style={{ fill: 'rgb(255, 255, 255)', transformOrigin: '222.795px 394.692px' }} className="animable"></path>
                    <path d="M221.1,401.39c-2.21,0-4.15,0-5-.13s-1.59-.45-1.82-1a1.88,1.88,0,0,1,.4-1.71l8.18-10.36a.5.5,0,0,1,.5-.18l7.64,1.63a.51.51,0,0,1,.4.49v10.65a.51.51,0,0,1-.49.5C230.58,401.27,225.35,401.39,221.1,401.39ZM223.46,389l-8,10.13c-.13.16-.33.52-.25.71s.35.32,1,.39c2.11.24,11.87.05,14.18,0v-9.75Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '222.809px 394.694px' }} className="animable"></path>
                    <path d="M222.53,327.32l-.48,63.73a3.05,3.05,0,0,0,3,3.07h2.4a3,3,0,0,0,3-2.57l9.17-57.93Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '230.835px 360.72px' }} className="animable"></path>
                    <path d="M227.5,394.62h-2.4a3.55,3.55,0,0,1-3.55-3.57l.48-63.73a.53.53,0,0,1,.22-.41.5.5,0,0,1,.46-.06l17.14,6.3a.51.51,0,0,1,.32.55L231,391.63A3.54,3.54,0,0,1,227.5,394.62ZM223,328l-.48,63a2.54,2.54,0,0,0,2.55,2.56h2.4a2.53,2.53,0,0,0,2.51-2.15L239.12,334Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '230.863px 360.72px' }} className="animable"></path>
                    {/* Simplified Person Body/Head */}
                    <circle cx="236.4" cy="327.32" r="13.86" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '236.4px 327.32px', transform: 'rotate(-76.99deg)' }} className="animable"></circle>
                    <path d="M278.58,388.49l8.19,10.37s1.36,1.63-1.09,1.91-14.74,0-14.74,0V390.12Z" style={{ fill: 'rgb(255, 255, 255)', transformOrigin: '279.043px 394.692px' }} className="animable"></path>
                    <path d="M280.73,401.39c-4.24,0-9.47-.12-9.8-.12a.51.51,0,0,1-.49-.5V390.12a.51.51,0,0,1,.4-.49l7.64-1.63a.49.49,0,0,1,.49.18l8.19,10.37a1.84,1.84,0,0,1,.4,1.7c-.23.56-.84.9-1.83,1S283,401.39,280.73,401.39Zm-9.29-1.11c2.31,0,12.07.23,14.18,0,.66-.07.95-.25,1-.39s-.12-.56-.24-.7l-8-10.14-6.94,1.49Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '279.032px 394.69px' }} className="animable"></path>
                    <path d="M279.3,327.32l.48,63.73a3,3,0,0,1-3,3.07h-2.4a3,3,0,0,1-3-2.57l-9.18-57.93Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '270.99px 360.72px' }} className="animable"></path>
                    <circle cx="265.44" cy="327.32" r="13.86" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '265.44px 327.32px', transform: 'rotate(-45deg)' }} className="animable"></circle>
                    {/* Character Arms/Monitor Interaction */}
                    <path d="M250,215.36c-6.12-.34-11.57,7.15-9.53,15.66,1.17,4.86,4.07,12.53,9.61,14,1.36.36,3-.27,4.4-1.22a.86.86,0,0,0,0,.52c.34,1.36,0,5.45,3.06,5.11s5.11-5.79,5.11-8.17-2.38-3.75-2.38-3.75l-.68-9.19s2.72,0,5.44-3.4S256.78,215.74,250,215.36Zm7.22,25.84c.78-1,1-1.91.27-2-2.38-.34-2.72-2.05-1.7-6.47,1-4.18,3.14,1.34,3.38,2-.05,1.61-.19,4.25-.65,5.17A4.85,4.85,0,0,1,257.19,241.2Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '252.745px 232.399px' }} className="animable"></path>
                    <path d="M257.12,249.92a2.47,2.47,0,0,1-1.62-.54c-1.12-.89-1.3-2.66-1.44-3.95,0-.29-.06-.56-.1-.77a5.65,5.65,0,0,1-4,.82c-6.29-1.64-9.07-10.58-10-14.35a14.55,14.55,0,0,1,2.65-12.73,9.1,9.1,0,0,1,7.39-3.54c5.45.3,14,4.09,15.61,7.7a2.4,2.4,0,0,1-.27,2.64,9,9,0,0,1-5.3,3.54l.63,8.46a5.17,5.17,0,0,1,2.4,4c0,2.46-2.1,8.28-5.55,8.67Zm-2.67-6.65a.45.45,0,0,1,.31.11.5.5,0,0,1,.16.57.37.37,0,0,0,0,.22,8.84,8.84,0,0,1,.17,1.16c.12,1.11.28,2.64,1.07,3.27a1.61,1.61,0,0,0,1.29.3c2.64-.29,4.66-5.28,4.66-7.67,0-2.06-2.11-3.3-2.13-3.31a.48.48,0,0,1-.25-.4l-.11-1.42a12.07,12.07,0,0,1-.65,4,5,5,0,0,1-1.43,1.5.48.48,0,0,1-.65,0,.5.5,0,0,1-.06-.66c.57-.77.64-1.17.62-1.25a2.83,2.83,0,0,1-2.16-1.12c-.71-1.05-.71-2.76,0-5.92.19-.8.54-1.88,1.41-1.94,1.08-.08,2.07,1.72,2.75,3.4l-.42-5.74a.49.49,0,0,1,.13-.38.51.51,0,0,1,.37-.16s2.53-.06,5.05-3.21a1.44,1.44,0,0,0,.14-1.62c-1.32-3-9.32-6.8-14.75-7.1a8.12,8.12,0,0,0-6.58,3.18,13.59,13.59,0,0,0-2.44,11.86c.67,2.8,3.33,12.06,9.25,13.61,1.06.28,2.47-.14,4-1.16A.57.57,0,0,1,254.45,243.27Zm2.3-11.6h0s-.26.11-.5,1.16c-.65,2.82-.7,4.36-.17,5.13a1.93,1.93,0,0,0,1.45.73,1,1,0,0,1,.7.39,24.86,24.86,0,0,0,.41-4.29C257.86,232.78,257,231.67,256.75,231.67Z" style={{ fill: 'rgb(38, 50, 56)', transformOrigin: '252.682px 232.39px' }} className="animable"></path>
                </g>
            </g>

            <defs>
                <filter id="active" height="200%">
                    <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>
                    <feFlood floodColor="#32DFEC" floodOpacity="1" result="PINK"></feFlood>
                    <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
                    <feMerge>
                        <feMergeNode in="OUTLINE"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
                <filter id="hover" height="200%">
                    <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>
                    <feFlood floodColor="#ff0000" floodOpacity="0.5" result="PINK"></feFlood>
                    <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
                    <feMerge>
                        <feMergeNode in="OUTLINE"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
                </filter>
            </defs>
        </svg>
    );
}
