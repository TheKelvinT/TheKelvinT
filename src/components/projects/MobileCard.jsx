import React from "react"
import { motion } from "framer-motion"

const MobileCard = ({ item }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0 },
      }}
      className="sm:hidden mb-6"
      style={{
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full w-full relative border-dark-gray border-[0.5px] p-6 bg-black-100 bg-opacity-70">
        <div className=" text-base ">
          <p className=" text-sm font-spacemono mb-1 text-primary">Freelance</p>
          <h3 className=" font-bold text-2xl  text-gray-50 mb-6">
            NOTA Cafe Website
          </h3>
          <div className="  mb-6 space-y-2">
            <p className="italic text-xs">Official Launch In Apr 2023</p>
            <p>
              Cafe with great food and top notch customer service deserve a
              website with high quality customer experience.
            </p>
            <p>
              Nota Cafe Website uses technologies such as Next.JS for SEO
              enhancement and navigation through different pages such as Menu,
              Career, Blog and Reservation{" "}
            </p>
          </div>
          <hr className="pt-6 border-dark-gray border-t-[0.5px] " />

          <ul className="flex gap-x-6 gap-y-4 flex-wrap text-xs font-spacemono whitespace-nowrap mb-6">
            <li>Next.Js</li>
            <li>TypeScript</li>
            <li>Sanity</li>
            <li>TailwindCSS</li>
          </ul>

          <div className="flex space-x-5 item-center">
            <a href="" className="text-end">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C3.58267 0 0 3.582 0 8C0 11.5347 2.292 14.5333 5.47133 15.5913C5.87067 15.6653 6 15.4173 6 15.2067V13.7173C3.77467 14.2013 3.31133 12.7733 3.31133 12.7733C2.94733 11.8487 2.42267 11.6027 2.42267 11.6027C1.69667 11.106 2.478 11.1167 2.478 11.1167C3.28133 11.1727 3.704 11.9413 3.704 11.9413C4.41733 13.164 5.57533 12.8107 6.032 12.606C6.10333 12.0893 6.31067 11.736 6.54 11.5367C4.76333 11.3333 2.89533 10.6473 2.89533 7.58267C2.89533 6.70867 3.208 5.99533 3.71933 5.43533C3.63667 5.23333 3.36267 4.41933 3.79733 3.318C3.79733 3.318 4.46933 3.10333 5.998 4.138C6.636 3.96067 7.32 3.872 8 3.86867C8.68 3.872 9.36467 3.96067 10.004 4.138C11.5313 3.10333 12.202 3.318 12.202 3.318C12.6373 4.42 12.3633 5.234 12.2807 5.43533C12.794 5.99533 13.104 6.70933 13.104 7.58267C13.104 10.6553 11.2327 11.332 9.45133 11.53C9.738 11.778 10 12.2647 10 13.0113V15.2067C10 15.4193 10.128 15.6693 10.534 15.5907C13.7107 14.5313 16 11.5333 16 8C16 3.582 12.418 0 8 0Z"
                  fill="#C6D1F1"
                />
              </svg>
            </a>
            <a href="">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.04995 13.3C1.67495 13.3 1.35635 13.1686 1.09415 12.9058C0.831351 12.6436 0.699951 12.325 0.699951 11.95V2.04995C0.699951 1.67495 0.831351 1.35635 1.09415 1.09415C1.35635 0.831351 1.67495 0.699951 2.04995 0.699951H6.99995V2.04995H2.04995V11.95H11.95V6.99995H13.3V11.95C13.3 12.325 13.1686 12.6436 12.9058 12.9058C12.6436 13.1686 12.325 13.3 11.95 13.3H2.04995ZM5.25575 9.69995L4.29995 8.74415L10.9942 2.04995H8.79995V0.699951H13.3V5.19995H11.95V3.00575L5.25575 9.69995Z"
                  fill="#C6D1F1"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MobileCard
