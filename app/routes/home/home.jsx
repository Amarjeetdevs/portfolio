// import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
// import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
// import gamestackTexture2 from '~/assets/gamestack-list.jpg';
// import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
// import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
// import gamestackTexture from '~/assets/gamestack-login.jpg';
// import sliceTextureLarge from '~/assets/slice-app-large.jpg';
// import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
// import sliceTexture from '~/assets/slice-app.jpg';
// import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import PlastindiaImage from '~/assets/Plastindia_Foundation.jpg'
import TrishulDefenceImage from '~/assets/Trishul_defence.jpg'
import TepProduct from '~/assets/tep_product.png'
// import TepSearch from '~/assets/tep_search.png'
import TepAbout from '~/assets/tep_about.png'
// import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
// import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Fullstack Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
         title="Plastindia Foundation"
         description="End-to-end development of Plastindia Foundation's official platform featuring member management, event coordination, certification tracking, and industry resource library"
  buttonText="View Website"
  buttonLink="https://www.plastindia.org"
  
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${PlastindiaImage} 1280w, ${PlastindiaImage} 2560w`,
              placeholder: PlastindiaImage,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        // title="Video game progress tracking"
        // description="Design and development for a video game tracking app built in React Native"
        // buttonText="View website"

        title="The Eyewear Project"
description="Full-stack e-commerce development for premium eyewear brand featuring AR try-on, product customization, and integrated inventory management"
buttonText="View live site"
// buttonLink="https://www.theeyewearproject.com"
        buttonLink="projects/smart-sparrow"

        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
           
            // {
            //   srcSet: `${TepSearch} 375w, ${TepSearch} 750w`,
            //   placeholder: TepSearch,
            // },
             {
              srcSet: `${TepAbout} 375w, ${TepAbout} 750w`,
              placeholder: TepAbout,
            },
             {
              srcSet: `${TepProduct} 375w, ${TepProduct} 750w`,
              placeholder: TepProduct,
            },
          ],
        }}
      />
      {/* <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      /> */}
       <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Trishul Defence Academy "
        description="Premier coaching for defence entrance exams like NDA, CDS, AFCAT, and SSB interviews, founded in 2003"
        buttonText="View project"
        buttonLink="https://www.trishuldefenceacademy.in/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${TrishulDefenceImage} 800w, ${TrishulDefenceImage} 1920w`,
              placeholder: TrishulDefenceImage,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
