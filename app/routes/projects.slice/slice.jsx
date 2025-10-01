import { Image } from '~/components/image';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Plastindia Foundation - Official Website';
const description =
  'Comprehensive web platform for Plastindia Foundation featuring dynamic content management, member directory, events, publications, and exhibition information.';
// const roles = ['Full Stack Development',  'System Architecture',  'Project Management'];
const roles = ['Full Stack Development', 'System Architecture', 'Project Management', 'Technical Leadership'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          srcSet={`${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/banner_plastindiaa.jpg'} 800w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/banner_plastindiaa.jpg'} 1920w`}
          width={800}
          height={500}
          placeholder={'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/banner_plastindiaa.jpg'}
          opacity={0.7}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.plastindia.org/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src={'https://plast-india.vercel.app/_next/image?url=https%3A%2F%2Fplastindia-website-assets.s3.ap-south-1.amazonaws.com%2F1_0514bffe45.png&w=3840&q=75'}
              srcSet={`${'https://plast-india.vercel.app/_next/image?url=https%3A%2F%2Fplastindia-website-assets.s3.ap-south-1.amazonaws.com%2F1_0514bffe45.png&w=3840&q=75'} 1280w, ${'https://plast-india.vercel.app/_next/image?url=https%3A%2F%2Fplastindia-website-assets.s3.ap-south-1.amazonaws.com%2F1_0514bffe45.png&w=3840&q=75'} 2560w`}
              width={1280}
              height={800}
              placeholder={'https://plast-india.vercel.app/_next/image?url=https%3A%2F%2Fplastindia-website-assets.s3.ap-south-1.amazonaws.com%2F1_0514bffe45.png&w=3840&q=75'}


              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
           <div className={styles.imagesText}>
  <ProjectSectionHeading>Architecting the Digital Foundation</ProjectSectionHeading>
  <ProjectSectionText>
    We engineered a comprehensive digital ecosystem that seamlessly integrates 2500+ member companies, 
    exhibition management, and real-time content delivery through scalable cloud architecture, 
    transforming operational workflows and enabling seamless collaboration across committees, 
    members, and industry partners through a unified, intuitive interface.
  </ProjectSectionText>
</div>
      <div 
      className={styles.sidebarImages}
      >
          <Image
    className={styles.sidebarImage}
    srcSet={`${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/aboutt_plastindia.jpg'} 500w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/aboutt_plastindia.jpg'} 1000w`}
    width={500}
    height={850}
    placeholder={'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/aboutt_plastindia.jpg'}
    alt="Plastindia Foundation member management interface"
    sizes={`(max-width: ${media.mobile}px) 300px, 500px`}
  />
  <Image
    className={styles.sidebarImage}
    srcSet={`${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/about_plastindia.jpg'} 500w, ${'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/about_plastindia.jpg'} 1000w`}
    width={500}
    height={850}
    placeholder={'https://gmzzorsgxpwoinkqgozk.supabase.co/storage/v1/object/public/blogsimage/mockups/about_plastindia.jpg'}
    alt="Plastindia Foundation about section interface"
    sizes={`(max-width: ${media.mobile}px) 300px, 500px`}
  />

</div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
    
    
          <ProjectSectionContent className={styles.grid}>

            <Image
              srcSet={`${'https://newplastindia.vercel.app/_next/image?url=https%3A%2F%2Fplastindia-website-assets.s3.ap-south-1.amazonaws.com%2Fround_logo_b353399bef.webp&w=1920&q=75'} 800w, ${'https://newplastindia.vercel.app/_next/image?url=https%3A%2F%2Fplastindia-website-assets.s3.ap-south-1.amazonaws.com%2Fround_logo_b353399bef.webp&w=1920&q=75'} 1920w`}
              width={800}
              height={500}
              placeholder={'https://newplastindia.vercel.app/_next/image?url=https%3A%2F%2Fplastindia-website-assets.s3.ap-south-1.amazonaws.com%2Fround_logo_b353399bef.webp&w=1920&q=75'}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
   <ProjectTextRow>
  <ProjectSectionHeading>Enhancing User Experience & Accessibility</ProjectSectionHeading>
  <ProjectSectionText>
    We streamlined complex navigation with intelligent search, personalized dashboards, 
    and quick-access bookmarks, reducing navigation time by 65% while improving content 
    discoverability across all member interactions and device types.
  </ProjectSectionText>
</ProjectTextRow>
            </ProjectSectionContent>

        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            {/* <div className={styles.gridImage}> */}
              {/* <div className={styles.gridForeground}>
                <Image
                  srcSet={`${'https://d3vg0sh3nz01y1.cloudfront.net/legacy_bb57de7d72.png'} 440w, ${'https://d3vg0sh3nz01y1.cloudfront.net/legacy_bb57de7d72.png'} 880w`}
                  width={440}
                  height={340}
                  placeholder={'https://d3vg0sh3nz01y1.cloudfront.net/legacy_bb57de7d72.png'}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div> */}
              <div className={styles.gridFForeground}>
                <Image
                  srcSet={`${'https://d3vg0sh3nz01y1.cloudfront.net/1987_b7a72ad3d1.png'} 440w, ${'https://d3vg0sh3nz01y1.cloudfront.net/1987_b7a72ad3d1.png'} 880w`}
                  width={440}
                  height={790}
                  placeholder={'https://d3vg0sh3nz01y1.cloudfront.net/1987_b7a72ad3d1.png'}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              {/* </div> */}

            </div>
          <div className={styles.gridText}>
  <ProjectSectionHeading>Scalable Architecture & Performance</ProjectSectionHeading>
  <ProjectSectionText>
    We engineered a cloud-native platform capable of handling 100,000+ concurrent users during major exhibitions while serving 2500+ member companies daily, implementing auto-scaling, advanced caching, and real-time monitoring to ensure 99.9% uptime and 60% faster load times across all member interactions and committee workflows.
  </ProjectSectionText>
</div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className={styles.grid}>
      
           <ProjectTextRow>
  <ProjectSectionHeading>Project Outcomes</ProjectSectionHeading>
  <ProjectSectionText>
    The platform revolutionized Plastindia Foundation's digital ecosystem, achieving 40% faster content updates, 60% increase in mobile engagement, 70% higher exhibition registration rates, 50% reduction in administrative overhead, and significantly improved member satisfaction through seamless, scalable experiences and real-time collaboration capabilities.
  </ProjectSectionText>
</ProjectTextRow>
            <Image
              src={'https://newplastindia.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMAGE.ffec3bf4.png&w=3840&q=75'}
              width={940}
              height={500}
              placeholder={'https://newplastindia.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIMAGE.ffec3bf4.png&w=3840&q=75'}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
