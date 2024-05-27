import Link from 'next/link';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { Typography } from '@mui/material';

import styles from './page.module.scss';

import { JobDescriptionAccordion, TeamCultureCard } from '@/(client)/components/home';

import { COLOR, OUTER_LINK } from '@/constant';

export default function Home() {
  return (
    <>
      <section className={styles.bannerSection}>
        <div className={styles.bannerSectionTitleContainer}>
          <Typography variant='h1' textAlign='center'>
            Adler, 3D web company
            <br />
            that makes virtual reality surpass
            <br />
            the physical world.
          </Typography>
        </div>
        <Link className={styles.bannerSectionLink} href={OUTER_LINK.banner} target='_blank'>
          <PlayCircleOutlineOutlinedIcon />
          <Typography variant='h3'>Watch the Intro</Typography>
        </Link>
      </section>
      <section className={styles.greetingSection}>
        <div className={styles.greetingSectionTitle}>
          <Typography variant='h1'>
            Hello.
            <br />
            I&apos;m Yurica
            <br />
            Ovaerenu,
            <br />
            CEO of Adler.
          </Typography>
        </div>
        <div className={styles.greetingSectionContent}>
          <Typography variant='h2' fontWeight='300' color={COLOR.black}>
            Yurica Ovaerenu, the CEO of Adler, embarked on her entrepreneurial journey at the age of
            16 while attending Seoul Science High School (SSHS).
          </Typography>
          <Typography variant='h2' fontWeight='300' color={COLOR.black}>
            She chose to drop out of Seoul National University (SNU), the top-ranked university in
            Korea.
          </Typography>
          <Typography variant='h2' fontWeight='300' color={COLOR.black}>
            At the age of 27, she became a serial entrepreneur who underwent a gender transition.
          </Typography>
          <Typography variant='h2' fontWeight='300' color={COLOR.black}>
            Inspired by her extensive experience playing 3D games like Overwatch and Mabinogi, she
            envisioned creating a virtual reality where individuals can truly be themselves.
          </Typography>
          <Typography variant='h2' fontWeight='300' color={COLOR.black}>
            Based on this vision, Adler recently launched its own technology-driven social media
            platform.
          </Typography>
        </div>
      </section>
      <section className={styles.introduceSection}>
        <Typography className={styles.introduceSectionTitle} variant='h1' textAlign='center'>
          With
          <br />
          Top-Tier South Korean VCs
          <br />& HYBE Director
        </Typography>
        <Typography
          className={styles.introduceSectionSubtitle}
          variant='h2'
          fontWeight='300'
          textAlign='center'>
          Adler has secured over $4M in investments from top-tier South Korean VCs,
          <br />
          including Kakao Investment (CVC of Korea’s biggest IT company),
          <br />
          Korean Investment Partners (AUM #1), Wonik Investment Partners,
          <br />
          and 11 other VCs. Additionally, our angel investors are among the strongest
          <br />
          in South Korea, including a Board of Director member of HYBE
          <br />
          (#1 Entertainment company), a professor at a leading university, and many of
          <br />
          the most influential financial figures and celebrities in the country.
        </Typography>
        <Typography className={styles.introduceSectionTitle} variant='h1' textAlign='center'>
          Carrousel du Louvre
          <br />
          & New York Times Square
          <br />
          w. Adler
        </Typography>
        <Typography
          className={styles.introduceSectionSubtitle}
          variant='h2'
          fontWeight='300'
          textAlign='center'>
          We also participated in the art fair
          <br />
          “Carrousel du Louvre” as the main technical partners
          <br />
          and executed the world’s first 3D real-time ad
          <br />
          on the iconic New York Times Square billboard.
        </Typography>
        <Typography
          className={styles.introduceSectionContent}
          variant='h2'
          fontWeight='300'
          textAlign='center'>
          Diversity and inclusion are core values at Adler, a proud South Korean company.
          <br />
          We collaborate with teammates from Ethiopia, Vietnam, Pakistan, and many
          <br />
          other countries. As we plan our relocation to the USA and Dubai, we continue to
          <br />
          welcome applicants from every country and background. Our starting salaries
          <br />
          for junior-level positions are aligned with those in developing countries.
          <br />
          <br />
          However, we aim to match senior-level compensation with Silicon Valley
          <br />
          standards. I am committed to securing funding from a Silicon Valley firm to
          <br />
          achieve this within 2-3 years. We are especially interested in finding passionate,
          <br />
          dedicated individuals who are eager to make a big impact on the world.
        </Typography>
        <Link className={styles.bannerSectionLink} href={OUTER_LINK.introduce} target='_blank'>
          <Typography variant='h3'>For more information</Typography>
          <KeyboardArrowRightIcon />
        </Link>
      </section>
      <section className={styles.teamCulterSection}>
        <Typography className={styles.teamCultureTitle} variant='h1' color={COLOR.black}>
          Work at Adler
        </Typography>
        <Typography
          className={styles.teamCultureDescription}
          variant='h3'
          color={COLOR.blackAlpha(0.4)}>
          Please open the cards.
        </Typography>
        <div className={styles.teamCultureCardContainer}>
          <TeamCultureCard
            title='Group of\nProfressional\nAthletes'
            description='People who play sports train themselves day and night to shave one second off their reach time, to perfect one degree of posture. We take the attitude of professional athletes and apply it to our work. In other words, we have a company culture of “going the extra mile 24/7 to be the best at what we love.”'
          />
          <TeamCultureCard
            title='Committed to\nGrowing Together'
            description='As Alfred Adler said, “People can change at any time.” But it’s undeniably challenging for people to make a personal transformation. That’s why, if someone possesses a strong determination to change and grow, we make long-term investments in such promising individuals. Adler actively supports team members in their growth journey.'
          />
          <TeamCultureCard
            title='Do not leave fate\nin the hands\nof others'
            description='We help team members play their desired roles effectively, just as they would choose a preferred position in a game and develop their characters. Individuals create their own outcomes based on their performance, just as game results determine levels and rankings. To enable team members to fully engage in the work they love, our HR system operates in a seamless and sophisticated manner, similar to the feedback loops of a game.'
          />
        </div>
      </section>
      <section className={styles.jobDescriptionSection}>
        <Typography variant='h1'>Join a team and inspire the work</Typography>
        <Typography variant='h2' fontWeight='300'>
          Find your desired role and discover how you can make an impact
        </Typography>
        <div className={styles.jobDescriptionContainer}>
          <JobDescriptionAccordion
            jobDescriptions={[
              {
                title: 'Senior Quality Assurance Engineer',
                content: {
                  informations: [
                    'Location: Fully Remote (Open to applicants from every country)',
                    'Type: Full-Time',
                    'Duration: Flexible, with potential for conversion to a permanent role based on performance.',
                    'Compensation: Our starting salaries for SQA are matched to the level of developing countries.',
                    'After 3 months, there is an opportunity for re-negotiation and stock options are available.',
                  ],
                  responsibilities: [
                    'Collaborate with cross-functional teams including developers, designers, and product managers to understand project requirements and specifications.',
                    'Develop comprehensive test plans and test cases based on project requirements and user stories.',
                    'Plan and execute the entire QA process, including manual and automated testing, across multiple devices.',
                    'Write and execute automated tests to identify defects, usability issues, and performance bottlenecks.',
                    'Conduct thorough regression testing to ensure that defects are resolved and that new features do not introduce unintended side effects.',
                    'Analyze test results and provide detailed reports to stakeholders, including recommendations for improvements and optimizations.',
                    'Assist in business analytics to support data-driven decision-making.',
                    'Work closely with developers to reproduce and debug issues reported during testing, ensuring timely resolution.',
                    'Continuously evaluate and improve our QA processes and methodologies to enhance efficiency and effectiveness.',
                    'Guide developers in writing their own unit tests.',
                    'Stay up-to-date with industry trends and best practices in software testing, 3D technology, and product development.',
                    'Utilize multiple QA devices and environments, and coordinate the use of shared QA resources.',
                  ],
                  requiredQualifications: [
                    "Bachelor's degree in Computer Science, Engineering, or related field.",
                    'Proven experience as a QA Engineer or similar role, preferably in a software development environment focused on 3D technology.',
                    'Strong knowledge of software QA methodologies, tools, and processes.',
                    'Experience with test automation tools such as Selenium, Appium, or similar.',
                    'Proficiency in programming/scripting languages such as Python, Java, JavaScript, etc.',
                    'Excellent analytical and problem-solving skills with meticulous attention to detail.',
                    'Strong communication and collaboration abilities, with the capacity to effectively interact with cross-functional teams.',
                    'Proactive mindset with a passion for learning and self-improvement.',
                  ],
                  optionalQualifications: [
                    'Familiarity with 3D modeling software (e.g., Blender, Maya, 3ds Max) and related file formats (e.g., OBJ, FBX).',
                    'Experience in VR platforms with availability of various VR test devices.',
                    'Experience using JIRA and Kanban boards for project management.',
                  ],
                },
              },
              {
                title: 'Art Director',
                content: {
                  informations: [
                    'Location: Fully Remote (Open to applicants from every country)',
                    'Type: Full-Time',
                    'Duration: Flexible, with potential for conversion to a permanent role based on performance.',
                    'Compensation: Our starting salaries for Art Directors are matched to the levels of developing countries. After 3 months, there is an opportunity for re-negotiation, and stock options are available.',
                  ],
                  responsibilities: [
                    'Collaborate with cross-functional teams, including UI/UX designers, 3D artists, and product managers, to understand and integrate project requirements into the visual design.',
                    'Lead the development of the brand identity, ensuring consistency across various digital platforms and coherence in visual elements such as logos, typography, color schemes, and overall visual language.',
                    'Manage and inspire a team of in-house artists and designers, fostering an environment of collaboration, creativity, and innovation, particularly in the realms of 3D and VR design.',
                    'Oversee the coordination and management of external resources, including 3D modelers and freelance designers, ensuring deliverables align with our high standards and brand vision.',
                    'Drive the creation of original concepts and designs that resonate with our target audience and align with our brand values, in collaboration with other creative team members.',
                    'Utilize expertise in 3D modeling, rendering, animation, and VR technologies to produce immersive and engaging visual experiences that push the boundaries of visual storytelling.',
                    'Oversee the entire project lifecycle of creative projects, from ideation and conceptualization through to production and delivery, ensuring deadlines are met and output reflects quality standards.',
                    'Develop and implement strategies for branding that create a unique and compelling brand identity, visible across all user touchpoints, from the website to marketing materials.',
                    'Address technical constraints related to web environments, focusing on optimization and loading speeds to ensure seamless user experiences.',
                    'Engage directly in design work, demonstrating leadership by example through crafting both 2D and 3D content as needed for project success.',
                  ],
                  requiredQualifications: [
                    "Hold a Bachelor's degree or higher in Fine Arts, Graphic Design, Visual Communication, or a related field.",
                    'Possess a minimum of 2+ years of proven experience in a similar creative leadership role, ideally as an Art Director, with a strong focus on brand design in 3D and VR environments.',
                    'Show strong proficiency in using industry-standard design software such as Adobe Creative Suite, Blender, Maya, Unity, or Unreal Engine.',
                    'Exhibit strong conceptual thinking and problem-solving abilities, with a keen eye for detail and a passion for pushing the boundaries of visual storytelling.',
                    'Demonstrate the ability to manage multiple projects simultaneously in a fast-paced environment, adapting quickly to changing priorities.',
                    'Have exceptional communication and interpersonal skills, necessary for effective collaboration with various stakeholders and management of team members and external partners.',
                  ],
                  optionalQualifications: [
                    'Advanced skills in specific areas of 3D modeling, VR development, or animation are highly regarded.',
                    'Experience in managing cross-functional teams in a tech-driven environment is beneficial.',
                    'Familiarity with current design trends, emerging technologies, and best practices in the fields of 3D design, VR development, and brand design.',
                  ],
                },
              },
              {
                title: 'User Experience Designer',
                content: {
                  informations: [
                    'Location: Fully Remote (Open to applicants from every country)',
                    'Type: Full-Time',
                    'Duration: Flexible, with potential for conversion to a permanent role based on performance.',
                    'Compensation: Our starting salaries for User Experience Designers are matched to the levels of developing countries. After 3 months, there is an opportunity for re-negotiation, and stock options are available.',
                  ],
                  responsibilities: [
                    'Design and refine user interfaces for our 3D platforms, ensuring they align with our mission to create virtual spaces where individuals can truly be themselves, while seamlessly integrating 2D components where necessary.',
                    'Collaborate with cross-functional teams including developers, product managers, and an Art Director to understand project requirements and influence user experience strategies.',
                    'Develop detailed wireframes, mockups, and prototypes using Figma to effectively communicate interaction and design ideas across both 2D and 3D formats.',
                    'Conduct user research and usability testing to gather feedback and refine design approaches, ensuring the final products resonate well with target audiences.',
                    'Create visual elements such as icons, graphics, and layouts that enhance user interaction in both 3D environments and traditional 2D interfaces, demonstrating a strong sense of art and design.',
                    'Evaluate and iterate on design solutions based on user feedback and analytics data.',
                    'Stay up-to-date with the latest Ul/UX trends, techniques, and technologies, particularly in 3D and immersive technologies, while also maintaining a strong foundation in 2D design principles.',
                  ],
                  requiredQualifications: [
                    "Bachelor's degree in Design, Computer Science, or related field.",
                    'At least 5 years of experience in Ul/UX design, with a portfolio showcasing proficiency in graphic design and projects involving complex user interfaces across both 2D and 3D dimensions.',
                    'Strong understanding of design principles and user-centered design methodologies.',
                    'Proficiency in Figma and other design tools such as Adobe Creative Suite, Sketch, and prototyping tools like Axure, InVision, or similar.',
                    'Excellent visual design skills with a refined sense of art and sensitivity to user-system interaction.',
                    'Strong communication and collaboration abilities, capable of explaining design concepts and strategies clearly and working effectively with an Art Director.',
                    'Proven ability to conduct comprehensive user research and usability testing.',
                  ],
                  optionalQualifications: [
                    'Experience with 3D modeling software (e.g., Blender, Maya, 3ds Max) and related file formats (e.g., OBJ, FBX).',
                    'Familiarity with VR platforms and interactive design for virtual environments.',
                    'Knowledge of optimizing 3D files for high performance, which is highly advantageous in ensuring efficient and effective user experiences in our 3D environments.',
                  ],
                },
              },
              {
                title: 'Senior Software Engineer',
                content: {
                  informations: [
                    'Location: Fully Remote (Open to applicants from every country)',
                    'Type: Full-Time',
                    'Duration: Flexible, with potential for conversion to a permanent role based on performance.',
                    'Compensation: Our starting salaries for Senior Software Engineers are matched to the levels of developing countries. After 3 months, there is an opportunity for re-negotiation, and stock options are available.',
                  ],
                  responsibilities: [
                    'Lead the design, development, and implementation of complex features for our 3D content creation platform, including integration with our new XRML language and development engine.',
                    'Write clean, efficient, and well-documented code across front-end and back-end technologies.',
                    'Collaborate closely with cross-functional teams to translate requirements into robust technical solutions that align with our proprietary technologies.',
                    'Utilize JIRA Kanban to manage projects and tasks efficiently.',
                    'Guide team members in architectural best practices, optimization techniques, and the specifics of our proprietary development tools to improve system performance and scalability.',
                    'Participate in code reviews and maintain high standards for code quality.',
                    'Stay updated on new technologies and best practices in the fields of programming languages, compilers, and game engine development.',
                    'Solve complex technical problems and provide solutions that enhance the efficiency and quality of our platform.',
                  ],
                  requiredQualifications: [
                    'A degree in Computer Science, Engineering, or related field is preferred but not mandatory.',
                    'Minimum 5+ years of software engineering experience, with a strong background in 3D game development and full-stack capabilities.',
                    'Proficient in Next.js, Babylon.js, FastAPl, Node.js, and familiar with AWS and Google Cloud platforms.',
                    'Demonstrated ability in system architecture and optimization, with a focus on creating efficient, scalable solutions.',
                    'Excellent problem-solving skills, with the ability to independently tackle complex technical challenges.',
                    'Strong understanding of programming languages and compiler theory, particularly as they apply to game development and proprietary engines.',
                    'Ability to guide and mentor team members in best practices for software development, optimization, and understanding proprietary languages and tools.',
                  ],
                  optionalQualifications: [
                    'Experience with additional 3D content creation tools and platforms.',
                    'Open-source contributions in the 3D development, compiler construction, or full-stack development space.',
                    'Experience in developing or contributing to the development of programming languages or game engines.',
                  ],
                },
              },
              {
                title: 'Strategy Intern',
                content: {
                  informations: [
                    'Location: Fully Remote (Open to applicants from every country)',
                    'Type: Internship',
                    'Duration: Flexible, with potential for conversion to a permanent role based on performance.',
                    'Compensation: Our starting salaries for interns are matched to the level of developing countries. After 3 months, there is an opportunity for re-negotiation and stock options are available.',
                  ],
                  responsibilities: [
                    'Assist in tracking and documenting the progress of company-wide projects and initiatives.',
                    'Conduct comprehensive research on competitors and market trends to support strategic decision-making.',
                    'Support the planning and execution of Adler’s strategic initiatives and future projects.',
                    'Run and manage weekly goal meetings to check progress on weekly goals and share status on completed tasks.',
                    'Prepare and organize agendas for weekly goal meetings.',
                    'Update Gantt Chart / Weekly, Monthly Roadmap after meetings with stakeholders.',
                    'Engage in ongoing discussions with the CEO and team leaders on organizational design.',
                    'Check and update KPI numbers in the Business Plan sheet.',
                    'Document and share research findings with the CEO in Slack.',
                    'Assist in planning Adler’s current and future organization.',
                    'Organize and document business direction decisions in Business Plan Docs and IR Deck.',
                    'Conduct market research and share news clippings in the Information channel.',
                    'Collect quantitative and qualitative data to inform strategic decisions.',
                    'Assist in preparing detailed reports and presentations based on research findings.',
                  ],
                  requiredQualifications: [
                    'Currently pursuing or recently completed a degree in Management, Business, or a related field.',
                    'Excellent communication skills, both written and verbal.',
                    'Familiarity with numbers and data analysis. Strong organizational and multitasking abilities.',
                    'Interest in startups and technology-driven environments.',
                    'Experience with project-tracking tools such as Notion Kanban and Google Apps.',
                  ],
                  optionalQualifications: [
                    'Understanding of 3D/VR technologies. Background in market research, strategic planning, finance, or a related field.',
                    'Strong analytical and problem-solving skills. Ability to synthesize and communicate recommendations to senior leadership.',
                    'Familiarity with strategic frameworks and business modeling.',
                    'Knowledge of software and industry technologies relevant to virtual reality.',
                  ],
                },
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
