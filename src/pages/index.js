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
          alt="Foto de Lis R. Barreto"
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
            Baixar Meu Currículo 📄
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
        <h2>Sobre Mim</h2>
        <p>
          Olá! Eu sou <strong>Lis</strong>, Engenheira de Machine Learning com experiência em construir soluções de dados escaláveis e implantar modelos de aprendizado de máquina em produção. Minha paixão está em usar dados e tecnologia para resolver problemas complexos e gerar valor para os negócios.
        </p>
        <p>
          Tenho mais de 5 anos de experiência desenvolvendo soluções com Python, focando na otimização de pipelines e no processamento de grandes volumes de dados. Trabalhei em projetos no setor financeiro, incluindo a criação de uma feature store para cartões de crédito, geração de leads para Renda Variável e orquestração de modelos online. Também sou especializada em DataOps e Spark Performance Tuning, com ampla experiência em reduzir custos por meio de melhorias em pipelines. Atualmente, meu foco está em MLOps e DevOps, criando soluções escaláveis que impulsionam resultados.
        </p>
        <Link
          className="button button--primary button--lg"
          to="/docs/about"
        >
          Saiba Mais Sobre Mim
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Portfólio | ${siteConfig.title}`}
      description="Portfólio de Lis R. Barreto: Engenheira de Machine Learning especializada em MLOps e soluções escaláveis."
    >
      <HomepageHeader />
      <main>
        <AboutMeSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
