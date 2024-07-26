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
      <div className="h-full w-full relative border-dark-gray border-[0.5px] p-6 bg-black-100 bg-opacity-80">
        <div className=" text-base ">
          <p className=" text-sm font-spacemono mb-1 text-primary">
            {item?.job}
          </p>
          <h3 className=" font-bold text-2xl  text-gray-50 mb-6">
            <a href={item?.link ? item?.link : "#"} target="_blank">
              {" "}
              {item?.title}
            </a>
          </h3>
          <div className="  mb-6 space-y-2 text-sm leading-5">
            <p>{item?.desc1}</p>
            <p>{item?.desc2}</p>
          </div>
          <hr className="pt-6 border-dark-gray border-t-[0.5px] " />

          <ul className="flex gap-x-6 gap-y-4 flex-wrap text-xs font-spacemono whitespace-nowrap mb-6">
            {item?.technologies.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default MobileCard
