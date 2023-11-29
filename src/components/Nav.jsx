import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="w-full h-[4.3rem] bg-[#142C30F5] row-start-2 row-end-2">
            <div className="flex justify-center w-full h-full">
                <Link to="/" className="h-full w-full text-center p-2.5" ><svg className="max-h-full max-w-full inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 38" fill="none"><path d="M21.3773 0.822965C20.7887 0.293158 20.0248 0 19.2328 0C18.4409 0 17.677 0.293158 17.0884 0.822965L0 16.2028V32.8713C0 34.2315 0.540349 35.536 1.50218 36.4978C2.464 37.4597 3.76852 38 5.12875 38H33.3369C34.6971 38 36.0016 37.4597 36.9635 36.4978C37.9253 35.536 38.4656 34.2315 38.4656 32.8713V16.2028L21.3773 0.822965ZM24.041 34.7897H14.4246V26.7344C14.4246 25.4592 14.9312 24.2362 15.8329 23.3345C16.7346 22.4328 17.9576 21.9262 19.2328 21.9262C20.508 21.9262 21.731 22.4328 22.6327 23.3345C23.5344 24.2362 24.041 25.4592 24.041 26.7344V34.7897ZM35.2602 32.8664C35.2602 33.3765 35.0575 33.8657 34.6969 34.2264C34.3362 34.5871 33.847 34.7897 33.3369 34.7897H27.2465V26.7344C27.2465 24.609 26.4022 22.5707 24.8993 21.0679C23.3965 19.565 21.3582 18.7207 19.2328 18.7207C17.1075 18.7207 15.0692 19.565 13.5663 21.0679C12.0634 22.5707 11.2191 24.609 11.2191 26.7344V34.7897H5.12875C4.61867 34.7897 4.12947 34.5871 3.76879 34.2264C3.4081 33.8657 3.20547 33.3765 3.20547 32.8664V17.6292L19.2328 3.20463L35.2602 17.6292V32.8664Z" fill="white"/></svg></Link>
                <Link to="/order" className="h-[125%] w-full text-center -translate-y-[45%]" ><svg className="max-h-full max-w-full inline-block" style={{filter: "drop-shadow(1px 2px 7px rgba(0, 75, 104, 0.70))"}} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="35" cy="35" r="35" fill="#00C0CC"/> <g clipPath="url(#clip0_168_2)"> <path d="M18.1105 27.4601C16.7663 24.7431 14.0999 18.0092 17.8999 16.2375C18.4649 16.0023 19.087 15.9404 19.6873 16.0597C20.2875 16.1789 20.8387 16.4739 21.2709 16.9072L29.1242 25.2989C29.2725 25.4447 29.3907 25.6182 29.472 25.8096C29.5533 26.0011 29.5961 26.2066 29.5979 26.4146C29.5998 26.6226 29.5606 26.8289 29.4827 27.0217C29.4049 27.2146 29.2897 27.3902 29.144 27.5385C28.9982 27.6869 28.8247 27.8051 28.6332 27.8864C28.4418 27.9676 28.2362 28.0104 28.0283 28.0123C27.8203 28.0141 27.614 27.975 27.4212 27.8971C27.2283 27.8192 27.0527 27.7041 26.9044 27.5583L19.1666 19.2933C19.355 25.2736 22.8764 29.7433 26.8315 34.2384C27.1351 34.5302 27.3104 34.9307 27.3187 35.3518C27.327 35.7728 27.1677 36.18 26.8759 36.4836C26.584 36.7872 26.1835 36.9624 25.7625 36.9707C25.3414 36.979 24.9343 36.8197 24.6307 36.5279C22.0317 33.8353 19.8356 30.7812 18.1105 27.4601ZM44.5079 41.65C44.2921 41.4137 44.0227 41.2327 43.7223 41.1225C43.4219 41.0123 43.0994 40.9759 42.782 41.0166C40.9453 41.2632 39.0769 41.1065 37.3069 40.5575C37.0358 40.4775 36.7481 40.4727 36.4746 40.5435C36.201 40.6143 35.9518 40.7582 35.7536 40.9596C33.3881 44.5316 40.9374 44.3052 42.5809 44.253L51.2624 53.4981C51.4049 53.6496 51.5759 53.7717 51.7656 53.8572C51.9553 53.9426 52.1599 53.9899 52.3679 53.9963C52.5759 54.0027 52.7831 53.9681 52.9777 53.8944C53.1722 53.8208 53.3504 53.7095 53.502 53.5669C53.6536 53.4244 53.7756 53.2534 53.8611 53.0637C53.9466 52.874 53.9939 52.6694 54.0003 52.4614C54.0067 52.2534 53.972 52.0462 53.8984 51.8516C53.8247 51.6571 53.7134 51.4789 53.5709 51.3273L44.5079 41.65ZM39.7499 38.1666C40.7896 38.1681 41.8192 37.9644 42.78 37.5672C43.7407 37.17 44.6136 36.587 45.3486 35.8518L53.536 27.6628C53.6832 27.5158 53.8001 27.3412 53.8798 27.1491C53.9596 26.9569 54.0007 26.751 54.0008 26.5429C54.001 26.3349 53.9601 26.1289 53.8807 25.9366C53.8012 25.7443 53.6846 25.5696 53.5376 25.4224C53.3906 25.2752 53.216 25.1584 53.0239 25.0786C52.8317 24.9989 52.6258 24.9577 52.4177 24.9576C52.2097 24.9575 52.0037 24.9983 51.8114 25.0778C51.6191 25.1572 51.4444 25.2738 51.2972 25.4208L43.1098 33.6098C42.4145 34.2991 41.5231 34.7566 40.5578 34.9199C39.5925 35.0831 38.6002 34.9441 37.7169 34.5218L48.786 23.4527C48.9373 23.3067 49.0579 23.132 49.1409 22.9388C49.2238 22.7456 49.2675 22.5378 49.2693 22.3276C49.2712 22.1174 49.2311 21.9089 49.1515 21.7143C49.0719 21.5197 48.9543 21.3429 48.8057 21.1943C48.657 21.0456 48.4802 20.928 48.2856 20.8484C48.091 20.7688 47.8825 20.7288 47.6723 20.7306C47.4621 20.7324 47.2543 20.7761 47.0611 20.8591C46.868 20.942 46.6933 21.0627 46.5472 21.2139L35.4749 32.283C35.0527 31.3997 34.9136 30.4075 35.0769 29.4421C35.2401 28.4768 35.6977 27.5855 36.3869 26.8901L44.5791 18.7027C44.8675 18.4041 45.0271 18.0042 45.0235 17.589C45.0199 17.1739 44.8534 16.7767 44.5598 16.4832C44.2663 16.1896 43.8691 16.0231 43.454 16.0195C43.0389 16.0159 42.6389 16.1755 42.3403 16.4639L34.1513 24.6513C32.8636 25.9433 32.0606 27.6397 31.8775 29.4546C31.6943 31.2695 32.1423 33.092 33.1459 34.6152L16.4639 51.2972C16.1754 51.5958 16.0159 51.9958 16.0195 52.4109C16.0231 52.8261 16.1896 53.2232 16.4831 53.5168C16.7767 53.8103 17.1738 53.9769 17.589 53.9805C18.0041 53.9841 18.4041 53.8245 18.7027 53.5361L35.3847 36.8541C36.6796 37.7101 38.1976 38.1665 39.7499 38.1666Z" fill="white"/> </g> <defs> <clipPath id="clip0_168_2"> <rect width="38" height="38" fill="white" transform="translate(16 16)"/> </clipPath> </defs> </svg></Link>
                <Link to="/account" className="h-full w-full text-center p-2.5"><svg className="max-h-full max-w-full inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" fill="none"><g clipPath="url(#clip0_58_74)"><path d="M19 19C20.8789 19 22.7156 18.4428 24.2779 17.399C25.8402 16.3551 27.0578 14.8714 27.7769 13.1355C28.4959 11.3996 28.684 9.48947 28.3175 7.64665C27.9509 5.80383 27.0461 4.11109 25.7175 2.78249C24.3889 1.45389 22.6962 0.549104 20.8534 0.182544C19.0105 -0.184015 17.1004 0.00411622 15.3645 0.723149C13.6286 1.44218 12.1449 2.65982 11.101 4.22209C10.0572 5.78435 9.5 7.62108 9.5 9.5C9.50252 12.0188 10.5042 14.4337 12.2853 16.2147C14.0663 17.9958 16.4812 18.9975 19 19ZM19 3.16667C20.2526 3.16667 21.4771 3.53811 22.5186 4.23403C23.5601 4.92995 24.3719 5.91908 24.8512 7.07634C25.3306 8.23361 25.456 9.50703 25.2116 10.7356C24.9673 11.9641 24.3641 13.0926 23.4783 13.9783C22.5926 14.8641 21.4641 15.4673 20.2356 15.7116C19.007 15.956 17.7336 15.8306 16.5763 15.3512C15.4191 14.8719 14.4299 14.0601 13.734 13.0186C13.0381 11.9771 12.6667 10.7526 12.6667 9.5C12.6667 7.8203 13.3339 6.20939 14.5217 5.02166C15.7094 3.83393 17.3203 3.16667 19 3.16667Z" fill="white"/><path d="M19 22.1667C15.222 22.1709 11.5998 23.6736 8.92836 26.345C6.25687 29.0165 4.75419 32.6386 4.75 36.4167C4.75 36.8366 4.91681 37.2393 5.21375 37.5363C5.51068 37.8332 5.91341 38 6.33333 38C6.75326 38 7.15599 37.8332 7.45292 37.5363C7.74985 37.2393 7.91667 36.8366 7.91667 36.4167C7.91667 33.4772 9.08437 30.6581 11.1629 28.5796C13.2414 26.5011 16.0605 25.3334 19 25.3334C21.9395 25.3334 24.7586 26.5011 26.8371 28.5796C28.9156 30.6581 30.0833 33.4772 30.0833 36.4167C30.0833 36.8366 30.2501 37.2393 30.5471 37.5363C30.844 37.8332 31.2467 38 31.6667 38C32.0866 38 32.4893 37.8332 32.7863 37.5363C33.0832 37.2393 33.25 36.8366 33.25 36.4167C33.2458 32.6386 31.7431 29.0165 29.0716 26.345C26.4002 23.6736 22.778 22.1709 19 22.1667Z" fill="white"/></g><defs><clipPath id="clip0_58_74"><rect width="38" height="38" fill="white"/></clipPath></defs></svg></Link>
            </div>
        </div>
    )
  }

  export default Nav
