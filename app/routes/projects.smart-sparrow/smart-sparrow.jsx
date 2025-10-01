import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import { Footer } from '~/components/footer';

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';
import { Image } from '~/components/image';
import { Link } from '~/components/link';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'The Eyewear Project -  E-commerce Platform';
const description = 'As the design and development lead, I created a direct-to-consumer e-commerce platform for premium, sustainable eyewear, focusing on minimalist design, seamless shopping experience, and brand storytelling for conscious consumers.';
const roles = [
  'E-commerce Design',
  'UX and UI Design', 
  'Front End Development',
  'Brand Identity',
  'Product Strategy',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.2}
          src={'https://theeyewearproject.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct%20image%20(2).06e17485.png&w=1920&q=75'}
          srcSet={`${'https://theeyewearproject.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%20image%20(2).06e17485.png&w=1920&q=75'} 1080w, ${'https://theeyewearproject.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct%20image%20(2).06e17485.png&w=1920&q=75'} 2160w`}
          placeholder={'https://theeyewearproject.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct%20image%20(2).06e17485.png&w=1920&q=75'}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://theeyewearproject.com/"
          roles={roles}
        />
    
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                !isDark
                  ? `${'https://master-website-assets.s3.ap-south-1.amazonaws.com/VIDEO-2024-09-25-15-27-59.webm'} 1280w, ${'https://master-website-assets.s3.ap-south-1.amazonaws.com/VIDEO-2024-09-25-15-27-59.webm'} 2560w`
                  : `${'https://master-website-assets.s3.ap-south-1.amazonaws.com/VIDEO-2024-09-25-15-27-59.webm'} 1280w, ${'https://master-website-assets.s3.ap-south-1.amazonaws.com/VIDEO-2024-09-25-15-27-59.webm'} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                !isDark
                  ? 'https://master-website-assets.s3.ap-south-1.amazonaws.com/VIDEO-2024-09-25-15-27-59.webm'
                  : 'https://master-website-assets.s3.ap-south-1.amazonaws.com/VIDEO-2024-09-25-15-27-59.webm'
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The Eyewear Project e-commerce platform showcasing sustainable eyewear collections."
            />
          </ProjectSectionContent>
        </ProjectSection> 

        <ProjectSection>
          <ProjectTextRow center centerMobile noMargin>
            <ProjectSectionHeading>The Vision</ProjectSectionHeading>
            <ProjectSectionText>
              The Eyewear Project was born from a vision to revolutionize the eyewear industry 
              by combining sustainable practices with premium design. In a market dominated by 
              fast-fashion and mass-produced eyewear, we identified an opportunity to create 
              a brand that prioritizes environmental responsibility without compromising on 
              style or quality. The challenge was to build a digital experience that authentically 
              communicates our commitment to sustainability while providing a seamless, 
              premium shopping journey for conscious consumers.
            </ProjectSectionText>
            <ProjectSectionText>
              Our primary goals were to establish trust through transparent manufacturing processes, 
              educate consumers about sustainable materials, and create a brand that stands for 
              both style and substance in the eco-friendly fashion space.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            {/* <Image
              key={theme}
              raised
              srcSet={
                isDark
                  ? `${'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2FFrame_810_30729a3a63.png&w=1920&q=75'} 1024w, ${'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2FFrame_810_30729a3a63.png&w=1920&q=75'} 2048w`
                  : `${'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2FFrame_810_30729a3a63.png&w=1920&q=75'} 1024w, ${'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2FFrame_810_30729a3a63.png&w=1920&q=75'} 2048w`
              }
              width={1024}
              height={800}
              placeholder={
                isDark
                  ? 'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2FFrame_810_30729a3a63.png&w=1920&q=75'
                  : 'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2FFrame_810_30729a3a63.png&w=1920&q=75'
              }
              alt={`Sustainable eyewear collection showcasing ${theme} themed product photography`}
              sizes="100vw"
            /> */}
            <ProjectImage
              key={theme}
              srcSet={
                isDark
                  ? `${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_Individual_collection_banner.jpg'} 1280w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_Individual_collection_banner.jpg'} 2560w`
                  : `${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_Individual_collection_banner.jpg'} 1280w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_Individual_collection_banner.jpg'} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                !isDark
                  ? 'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_Individual_collection_banner.jpg'
                  : 'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_Individual_collection_banner.jpg'
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The Eyewear Project brand identity and logo design system."
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Brand Identity & Design System</ProjectSectionHeading>
              <ProjectSectionText>
                To establish a strong foundation for the brand, I developed a comprehensive 
                design system that reflects our core values of sustainability, quality, and 
                minimalist aesthetics. The design system needed to be flexible enough to 
                evolve with the brand while maintaining consistency across all touchpoints - 
                from the e-commerce platform to marketing materials and packaging.
              </ProjectSectionText>
              <ProjectSectionText>
                The color palette was inspired by natural elements, with earthy tones and 
                organic textures that communicate our commitment to the environment. Typography 
                was carefully selected to balance readability with premium appeal, ensuring 
                accessibility while maintaining a sophisticated brand presence.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2Flightweight_2ab92cb3d1.webp&w=1920&q=75'} 1280w, ${'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2Flightweight_2ab92cb3d1.webp&w=1920&q=75'} 2560w`
                  : `${'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2FFrame_801_9844223c36.jpg&w=1920&q=75'} 1280w, ${'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2FFrame_801_9844223c36.jpg&w=1920&q=75'} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? 'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2Flightweight_2ab92cb3d1.webp&w=1920&q=75'
                  : 'https://theeyewearproject.com/_next/image?url=https%3A%2F%2Fmaster-website-assets.s3.ap-south-1.amazonaws.com%2Flightweight_2ab92cb3d1.webp&w=1920&q=75'
              }
              alt="The Eyewear Project e-commerce platform product pages and collections."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>E-commerce Experience</ProjectSectionHeading>
              <ProjectSectionText>
                The core of the project was building a seamless e-commerce platform that 
                makes sustainable shopping effortless and enjoyable. I focused on creating 
                an intuitive user journey from product discovery to checkout, with particular 
                attention to mobile-first design given the growing trend of mobile shopping.
              </ProjectSectionText>
              <ProjectSectionText>
                Key features included advanced filtering for sustainable attributes, detailed 
                product information highlighting eco-friendly materials, and a streamlined 
                checkout process that maintains the premium feel of the brand throughout 
                the entire customer journey.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.8}
            backgroundElement={
              <Image
                srcSet={`${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_background.jpg'} 1280w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_background.jpg'} 2560w`}
                width={1280}
                height={900}
                placeholder={'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/tep_background.jpg'}
                alt="Sustainable materials and manufacturing process visualization."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Sustainability Storytelling</ProjectSectionHeading>
                  <ProjectSectionText>
                    A crucial aspect of the platform was effectively communicating our 
                    sustainability story. I integrated interactive elements that educate 
                    consumers about our materials, manufacturing processes, and environmental 
                    impact in an engaging, visually compelling way.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Through animated infographics, material origin stories, and transparent 
                    supply chain information, we built trust and helped customers understand 
                    the real impact of their purchase decisions, turning the shopping 
                    experience into an educational journey.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              {/* ////////////////////////// */}
          <Image
  className={styles.sideImage}
  srcSet={`${'https://master-website-assets.s3.ap-south-1.amazonaws.com/Clip_path_group_6737039625.png'} 640w, ${'https://master-website-assets.s3.ap-south-1.amazonaws.com/Clip_path_group_6737039625.png'} 1280w`}
  width={640}
  height={400}
  placeholder={'https://master-website-assets.s3.ap-south-1.amazonaws.com/Clip_path_group_6737039625.png'}
  alt="Interactive sustainability features and material information on the platform."
  sizes={`(max-width: ${media.mobile}px) 80vw, 40vw`}
/>
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Mobile-First Optimization</ProjectSectionHeading>
              <ProjectSectionText>
                Recognizing that most users shop on mobile devices, I implemented a 
                mobile-first design approach that prioritizes touch interactions, fast 
                loading times, and intuitive navigation. The responsive design ensures 
                a consistent premium experience across all device sizes while maintaining 
                the brand's aesthetic integrity.
              </ProjectSectionText>
              <ProjectSectionText>
                Performance optimization was critical, with lazy loading images, optimized 
                assets, and efficient code delivery to ensure quick page loads and smooth 
                interactions, particularly important for users on slower mobile connections.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={theme}
              srcSet={
                !isDark
                  ? `${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_shopptingg.jpg'} 1280w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_shopptingg.jpg'} 2560w`
                  : `${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_shopping.jpg'} 1280w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_shopping.jpg'} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? 'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_shopptingg.jpg'
                  : 'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_shopptingg.jpg'
              }
              alt="Mobile-responsive design of The Eyewear Project e-commerce platform."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Technical Implementation & Features
                </ProjectSectionHeading>
                <ProjectSectionText>
                  The platform was built using modern web technologies with a focus on 
                  scalability, performance, and maintainability. Key technical achievements 
                  include implementing a headless commerce architecture, optimizing for 
                  Core Web Vitals, and ensuring full accessibility compliance.
                </ProjectSectionText>
                <ProjectSectionText>
                  Advanced features like virtual try-on capabilities, personalized 
                  recommendations, and seamless integration with our sustainability 
                  tracking systems were developed to enhance the user experience while 
                  maintaining the platform's technical excellence.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div 
            // className={styles.sideImages}
            >
              <Image
                className={styles.sidebarImage}
                srcSet={
                  !isDark
                    ? `${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_tech.jpg'} 260w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_tech.jpg'} 520w`
                    : `${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_techh.jpg'} 260w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_techh.jpg'} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? 'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_tech.jpg'
                    : 'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/Tep_tech.jpg'
                }
                alt="E-commerce platform features and user interface components."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  !isDark
                    ? `${'https://master-website-assets.s3.ap-south-1.amazonaws.com/TEP_LOGO_845f551323.svg'} 260w, ${'https://master-website-assets.s3.ap-south-1.amazonaws.com/TEP_LOGO_845f551323.svg'} 520w`
                    : `${'https://master-website-assets.s3.ap-south-1.amazonaws.com/TE_Plogo_a0206d3480.svg'} 260w, ${'https://master-website-assets.s3.ap-south-1.amazonaws.com/TE_Plogo_a0206d3480.svg'} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? 'https://master-website-assets.s3.ap-south-1.amazonaws.com/TEP_LOGO_845f551323.svg'
                    : 'https://master-website-assets.s3.ap-south-1.amazonaws.com/TEP_LOGO_845f551323.svg'
                }
                alt="Sustainable material information and product details interface."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
                  <Image
                className={styles.video}
                srcSet={
                  !isDark
                    ? `${'https://master-website-assets.s3.ap-south-1.amazonaws.com/TEP_LOGO_845f551323.svg'} 260w, ${'https://master-website-assets.s3.ap-south-1.amazonaws.com/TEP_LOGO_845f551323.svg'} 520w`
                    : `${'https://master-website-assets.s3.ap-south-1.amazonaws.com/TE_Plogo_a0206d3480.svg'} 260w, ${'https://master-website-assets.s3.ap-south-1.amazonaws.com/TE_Plogo_a0206d3480.svg'} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? 'https://master-website-assets.s3.ap-south-1.amazonaws.com/TEP_LOGO_845f551323.svg'
                    : 'https://master-website-assets.s3.ap-south-1.amazonaws.com/TEP_LOGO_845f551323.svg'
                }
                alt="Sustainable material information and product details interface."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            <ProjectSectionHeading>Project Outcome</ProjectSectionHeading>

              <ProjectSectionText>
                The Eyewear Project represents a successful fusion of sustainable values 
                with premium e-commerce design. By creating a platform that authentically 
                communicates our environmental mission while delivering an exceptional 
                shopping experience, we've established a brand that resonates with 
                conscious consumers and sets new standards for sustainable fashion retail.
              </ProjectSectionText>
              <ProjectSectionText>
                The platform continues to evolve, with ongoing improvements focused on 
                enhancing user experience, expanding sustainable features, and maintaining 
                our commitment to environmental responsibility while driving business growth.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> 
      </ProjectContainer>
      <Footer />
    </>
  );
};