import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useThemeContext from "@theme/hooks/useThemeContext";

import styles from "./styles.module.css";

function useFeatures() {
  return [
    {
      title: <>Objection.js + Knex.js</>,
      imageUrl: "img/knexjs.png",
      description: (
        <>
          Objection.js is an ORM for Node.js that aims to stay out of your way
          and make it as easy as possible to use the full power of SQL and the
          underlying database engine while still making the common stuff easy
          and enjoyable.
          <br />
          Knex.js is a "batteries included" SQL query builder for Postgres,
          MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed
          to be flexible, portable, and fun to use. It features both traditional
          node style callbacks as well as a promise interface for cleaner async
          flow control, a stream interface, full featured query and schema
          builders, transaction support (with savepoints), connection pooling
          and standardized responses between different query clients and
          dialects.
        </>
      ),
    },
    {
      title: <>Postgres</>,
      imageUrl: "img/postgres.png",
      description: (
        <>
          PostgreSQL is a powerful, open source object-relational database
          system with over 30 years of active development that has earned it a
          strong reputation for reliability, feature robustness, and
          performance.
        </>
      ),
    },
  ];
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imageUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Features() {
  const features = useFeatures();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  const context = useDocusaurusContext();

  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Features />
      </main>
    </Layout>
  );
}

export default Home;
