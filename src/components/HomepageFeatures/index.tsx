import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ottawa',
    Svg: require('@site/static/img/ottawa-rust.svg').default,
    link: 'https://ottawatourism.ca/',
    description: (
      <>
       Ottawa City
      </>
    ),
  },
  {
    title: 'Rust',
    Svg: require('@site/static/img/rustacean-flat-noshadow.svg').default,
    link: 'https://rust-lang.org',
    description: (
      <>
       Rust Programming Language
      </>
    ),
  },
  {
    title: 'Events',
    Svg: require('@site/static/img/rustacean-meetup.svg').default,
    link: 'https://www.meetup.com/meetup-group-bdcioynp/',
    description: (
      <>
        MeetUp
      </>
    ),
  },
  {
    title: 'Chat',
    Svg: require('@site/static/img/zulip-icon-circle.svg').default,
    link: 'https://ottawa-rust.zulipchat.com/',
    description: (
      <>
        Zulip
      </>
    ),
  },

];

function Feature({title, Svg, description, link}: FeatureItem) {
  const content = (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </>
  );

  return (
    <div className={clsx('col col--3')}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
          {content}
        </a>
      ) : (
        content
      )}
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
