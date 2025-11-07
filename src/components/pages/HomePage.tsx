import HeroSlider from '../sections/HeroSlider';
import AboutSection from '../sections/AboutSection';
import MissionSection from '../sections/MissionSection';
import BlogSection from '../sections/BlogSection';
import PartnersSection from '../sections/PartnersSection';
import { slidesData } from '../../data/slidesData';
import { blogData } from '../../data/blogData';
import { partnersData } from '../../data/partnersData';

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={slidesData} />
      <AboutSection />
      <MissionSection />
      <BlogSection articles={blogData} />
      <PartnersSection partners={partnersData} />
    </>
  );
}