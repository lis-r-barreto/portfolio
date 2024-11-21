import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Soluções Impactantes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Experiência no desenvolvimento de soluções que transformam dados em 
        valor de negócio, utilizando técnicas avançadas de Machine Learning 
        e MLOps.
      </>
    ),
  },
  {
    title: 'Colaboração e Inovação',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Trabalho colaborativo em equipes multidisciplinares, sempre buscando 
        implementar soluções inovadoras para desafios complexos no setor 
        de dados e tecnologia.
      </>
    ),
  },
  {
    title: 'Aprendizado Contínuo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Comprometida com o aprendizado contínuo, utilizando as mais recentes 
        tecnologias e práticas para aprimorar projetos e impulsionar resultados.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
