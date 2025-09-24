// import profileImgLarge from '~/assets/profile-large.jpg';
// import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
// import profileImg from '~/assets/profile.jpg';
// import { Button } from '~/components/button';
// import { DecoderText } from '~/components/decoder-text';
// import { Divider } from '~/components/divider';
// import { Heading } from '~/components/heading';
// import { Image } from '~/components/image';
// import { Link } from '~/components/link';
// import { Section } from '~/components/section';
// import { Text } from '~/components/text';
// import { Transition } from '~/components/transition';
// import { Fragment, useState } from 'react';
// import { media } from '~/utils/style';
// import katakana from './katakana.svg';
// import styles from './profile.module.css';

// const ProfileText = ({ visible, titleId }) => (
//   <Fragment>
//     <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
//       <DecoderText text="Hi there" start={visible} delay={500} />
//     </Heading>
//     <Text className={styles.description} data-visible={visible} size="l" as="p">
//       I’m Amarjeet, currently I live in Sydney working as a senior product designer at{' '}
//       <Link href="https://www.qwilr.com">Qwilr</Link>. My projects include UX design, UI
//       animations, and icon illustration. Being comfortable with code allows me to rapidly
//       prototype and validate experiences. If you’re interested in the tools and software I
//       use check out my <Link href="/uses">uses page</Link>.
//     </Text>
//     <Text className={styles.description} data-visible={visible} size="l" as="p">
//       In my spare time I like to practice Brazilian Jiu Jitsu, play video games, and{' '}
//       <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
//       about new projects, so feel free to drop me a line.
//     </Text>
//   </Fragment>
// );

// export const Profile = ({ id, visible, sectionRef }) => {
//   const [focused, setFocused] = useState(false);
//   const titleId = `${id}-title`;

//   return (
//     <Section
//       className={styles.profile}
//       onFocus={() => setFocused(true)}
//       onBlur={() => setFocused(false)}
//       as="section"
//       id={id}
//       ref={sectionRef}
//       aria-labelledby={titleId}
//       tabIndex={-1}
//     >
//       <Transition in={visible || focused} timeout={0}>
//         {({ visible, nodeRef }) => (
//           <div className={styles.content} ref={nodeRef}>
//             <div className={styles.column}>
//               <ProfileText visible={visible} titleId={titleId} />
//               <Button
//                 secondary
//                 className={styles.button}
//                 data-visible={visible}
//                 href="/contact"
//                 icon="send"
//               >
//                 Send me a message
//               </Button>
//             </div>
//             <div className={styles.column}>
//               <div className={styles.tag} aria-hidden>
//                 <Divider
//                   notchWidth="64px"
//                   notchHeight="8px"
//                   collapsed={!visible}
//                   collapseDelay={1000}
//                 />
//                 <div className={styles.tagText} data-visible={visible}>
//                   About me
//                 </div>
//               </div>
//               <div className={styles.image}>

//                 <Image
//                   reveal
//                   delay={100}
//                   placeholder={`https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/CV/amarjeet_image_professional_half.jpg?width=20`}
//                   srcSet={`
//     https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/CV/amarjeet_image_professional_half.jpg 480w,
//     https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/CV/amarjeet_image_professional_half.jpg 960w
//   `}
//                   width={960}
//                   height={10}
//                   sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
//                   alt="Me smiling like a goofball at the Qwilr office in Sydney"
//                 />
//                 <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
//                   <use href={`${katakana}#katakana-profile`} />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </Section>
//   );
// };


// import profileImgLarge from '~/assets/profile-large.jpg';
// import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
// import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Amarjeet Kumar" start={visible} delay={500} />
    </Heading>
    <Text className={styles.subtitle} data-visible={visible} size="m" as="p">
      Full Stack Developer
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Amarjeet Kumar, a passionate Full Stack Developer based in Bangalore, India. 
      With expertise in modern web technologies, I specialize in building scalable applications 
      that deliver exceptional user experiences.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Currently expanding my skills in cloud technologies and DevOps practices while 
      working on innovative projects. I enjoy solving complex problems and am always 
      eager to learn new technologies and methodologies.
    </Text>
    <Text className={styles.contactInfo} data-visible={visible} size="m" as="p">
      <strong>Email:</strong> amarjeet07.devs@gmail.com<br/>
      <strong>Phone:</strong> +91 6205645474<br/>
      <strong>Location:</strong> Bangalore, India
    </Text>
    <div className={styles.links} data-visible={visible}>
      <Link href="https://www.linkedin.com/in/amarjeet07devs" className={styles.socialLink}>LinkedIn</Link> <br />
      {/* <Link href="https://github.com/your-profile" className={styles.socialLink}>GitHub</Link> */}
    </div>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />

              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Contact Me
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={`https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/CV/amarjeet_image_professional_half.jpg?width=20`}
                  srcSet={`
                    https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/CV/amarjeet_image_professional_half.jpg 480w,
                    https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/CV/amarjeet_image_professional_half.jpg 960w
                  `}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Amarjeet Kumar - Full Stack Developer"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
