import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          src={require('@site/static/img/me.jpg').default}
          alt="Your Name"
          style={{
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            marginBottom: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="/files/resume.pdf"
            target="_blank"
          >
            Download My Resume 📄
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutMeSection() {
  return (
    <section className={styles.aboutMeSection}>
      <div className="container">
        <h2>About</h2>
        <p>
          Hi! I'm <strong>Lis</strong>, a Machine Learning Engineer with experience in building scalable data solutions and deploying ML models into production. I am passionate about solving real-world problems using data and technology.
        </p>
        <p>
        With over 5 years of experience developing solutions with Python, initially focused on optimizing pipelines and processing large volumes of data. I’ve worked on projects in the financial sector, including lead generation for Variable Income, building a feature store for credit cards, and orchestrating online models. Specialized in DataOps and Spark Performance Tuning, with solid experience in migrating pipelines for cost reduction. Currently, I am focused on applying my knowledge of MLOps and DevOps to create scalable machine learning solutions that deliver business value.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/about"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Portfolio | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <AboutMeSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
