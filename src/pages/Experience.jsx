import React,{useState} from 'react'
import HeaderText from '../components/HeaderText'
import PageIndex from '../components/PageIndex'
import SubArrowIcon from '../components/SubArrowIcon'
import { Tab } from '@headlessui/react'
import {easeOut, motion} from 'framer-motion'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Experience = () => {

    let [categories] = useState({
        'UCL, UK': [
          {
            id: 1,
            header:'University College London',
            title:'MEng Civil Engineering',
            location:'@ UK',
            desc1:'Selected as a recipient of the prestigious Yayasan Gamuda Scholarship for my university education in the United Kingdom.',
            desc2:'Qualified for the overseas exchange program and continued my 3rd year studies in Hong Kong for a year.',
            desc3:'Graduated with Second-upper class honors.',
            desc4:'',
          },
        ],
        'GAMUDA': [
          {
            id: 1,
            header:'Gamuda Engineering',
            title:'Project Engineer',
            location:'',
            desc1:'Achieved up to a 30% reduction in overall package costs by implementing value engineering techniques to analyze various engineering solutions.',
            desc2:"Contributed to the project manager's efforts in preparing a master implementation roadmap, conducting risk analyses, and allocating resources, resulting in a more defined execution strategy.",
            desc3:"Utilized cutting-edge tools like MS Project and Primavera to develop highly effective Gantt Charts and Time-Location Charts, paving the way for successful project planning and execution.",
     
          },
        ],
        'Gelang Semarak': [
          {
            id: 1,
            header:'Gelang Semarak - Construction',
            title:'Senior Project Engineer',
            location:'',
            desc1:'I put my data analysis skills to work by leading a strategic digitalization initiative that optimized business operations, monitored performance, and reduced monthly operating costs by a whopping 15%.',
            desc2:'Partnered with an esteemed client team to conceptualize and execute effective ESG framework adoption strategies, culminating in a noteworthy 17% spike in international investment interest for the year 2021.',
            desc3:'Crafted engaging training materials and innovative mentoring techniques for staff at all levels to facilitate the adoption of our new digitalized system, resulting in increased sustainability and continuous optimization.',
            desc4:'',
          },
        ],
        'Kyzen Bina': [
          {
            id: 1,
            header:'Kyzen Bina - Interior Design Consultant',
            title:'Project Manager',
            location:'',
            desc1:'Managed vendor and contractor relationships to ensure timely delivery of high-quality materials for optimal project outcomes.',
            desc2:'Effectively managed project activities, including scheduling, budget management, and resource allocation, to meet project briefs and deliver successful outcomes with high client satisfaction.',
            desc3:'Led cross-functional teams in the successful delivery of complex projects, utilizing effective communication, problem-solving, and decision-making skills to achieve optimal outcomes.',
            desc4:'',
          },
        ],
        'Part-time Courses': [
          {
            id: 1,
            header:'Part-time Courses',
            title:'',
            location:'',
            desc1:'Begin my journey in Web Dev with a project-oriented Web Developer course on Udemy, mastering HTML, CSS, and JavaScript, and applying these skills to develop innovative web projects.',
            desc2:'Dived deeper into modern web development with React and Redux State Management course to enhance knowledge on state management.',
            desc3:'Learn how to integrate headless CMS such as Sanity and Strapi as the backend. ',
            desc4:'',
          },
        ],
        'Freelancing': [
          {
            id: 1,
            header:'Freelancing',
            title:'Web Developer',
            location:'',
            desc1:'Design and develop responsive and mobile friendly webpages for business clients using the latest technologies out there.',
            desc2:'Utilized Figma to create website mockups and prototypes for pre-development.',
            desc3:'Provide ongoing website maintenance and support, including regular backups, security updates and bug fixes.',
            desc4:'',
          },
        ],
      })

      const tabStyles= ({ selected }) =>
  classNames(
    'w-full rounded-lg py-2.5 px-4 whitespace-nowrap outline-none text-md  text-gray-50',
    '',
    selected
      ? 'bg-white/[0.22] font-bold'
      : ' hover:bg-white/[0.22] hover:text-gray-50'
  )

  return (
    <section
    id="experience"
    className="flex-grow overflow-hidden flex items-start lg:w-[800px]  xl:w-[980px]  py-24 xl:py-48 mx-6 sm:mx-12 md:mx-24  lg:mx-auto  flex-col sm:justify-start text-light-gray  "
  >
    
        <motion.div initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5}}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1 , x: 0 }
              }}
              className='mb-10 flex w-full'>
            <PageIndex>02. </PageIndex>
            <HeaderText>My Experience</HeaderText>
            <div className="w-full border-t mt-3 border-light-gray">
            </div>       
        </motion.div>

        <div className="  flex flex-col w-full">
      <Tab.Group>
      <div className='sm:flex sm:flex-row  '>
        <Tab.List
        >
          <motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 , delay:0.6}}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex sm:flex-col gap text-xs sm:overflow-visible overflow-x-scroll">
          {Object.keys(categories).map((category,index) => (
            
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'py-3 px-4 border-r-0 w-full border-b-[1px] sm:border-b-0 sm:border-r-[1px] whitespace-nowrap font-spacemono text-right',
                  '  ',
                  selected
                    ? 'text-primary border-primary focus:outline-none'
                    : ' hover:bg-white/[0.12]   '
                )
              }
            >
              {category}
            </Tab>
           
          ))}
           </motion.div>
        </Tab.List>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                '  sm:py-0 py-9 sm:px-9 ',
               
              )}
            >
              <ul>
                {posts.map((post) => (
                  <motion.li initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, delay:0.1, ease:easeOut}}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1 , x: 0,  transition: { duration: 1, delay: 0.3  } }
                  }}
                    key={post.id}
                  >
                    <h3 className="text-xl font-bold mb-1">
                      <span>{post.header} </span><span className='text-primary'>{post.location}</span>
                    </h3>
                    <p className='font-spacemono text-xs'>{post.title}</p>
                    <ul className="mt-7 flex flex-col  gap-y-4 text-sm leading-4 ">
                      <li className='flex items-start gap-2'><SubArrowIcon/>{post.desc1}</li>
                      
                      <li className='flex items-start gap-2'><SubArrowIcon/>{post.desc2}</li>
                      
                      <li className='flex items-start gap-2'><SubArrowIcon/>{post.desc3}</li>
                    </ul>

               
                  </motion.li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
        
 

  </section>
  )
}

export default Experience
