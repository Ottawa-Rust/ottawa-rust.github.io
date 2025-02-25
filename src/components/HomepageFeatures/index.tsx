import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ottawa',
    Svg: require('@site/static/img/ottawa-rust.svg').default,
    description: (
      <>
       Ottawa City
      </>
    ),
  },
  {
    title: 'Rust',
    Svg: require('@site/static/img/rustacean-flat-noshadow.svg').default,
    description: (
      <>
       Rust Programming Language
      </>
    ),
  },
  {
    title: 'Meetup',
    Svg: require('@site/static/img/rustacean-meetup.svg').default,
    description: (
      <>
        Group
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
