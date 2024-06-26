import React from "react"

const Footer = () => {
  return (
    <div className="footer px-auto py-4 sm:py-8 gap-3 sm:gap-8 flex justify-center items-center text-sm font-spacemono">
      <div>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 13.5999H3.98L4.1 9.6999L7.48 13.5999H12.6V9.5999H8.42L7.5 8.3999C6.98 7.7199 6.62 7.0599 6.68 6.8999C6.74 6.7399 7.74 5.3199 8.9 3.7199C10.06 2.1399 11 0.779902 11 0.719902C11 0.659902 10.16 0.599902 9.14 0.599902H7.28L4 5.0799V0.599902H0V13.5999Z"
            fill="#C6D1F1"
          />
          <path
            d="M16 1.5999C16 2.26264 15.4627 2.7999 14.8 2.7999C14.1373 2.7999 13.6 2.26264 13.6 1.5999C13.6 0.937161 14.1373 0.399902 14.8 0.399902C15.4627 0.399902 16 0.937161 16 1.5999Z"
            fill="#C6D1F1"
          />
        </svg>
      </div>
      <div>|</div>
      <div>Designed and Built by Kelvin Tan</div>
    </div>
  )
}

export default Footer
