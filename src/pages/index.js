/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Nhóm Tế Bào</>,
    imageUrl: "img/undraw_hang_out_h9ud.svg",
    description: (
      <>
        Hội Thánh thật sẽ sản sinh những Hội Thánh khác, Cơ Đốc Nhân thật sẽ sản
        sinh Cơ Đốc Nhân thật khác!
      </>
    )
  },
  {
    title: <>Lan Tỏa Tình Yêu Thương Thật</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: <>Tình yêu thương chẳng hề hư mất bao giờ!</>
  },
  {
    title: <>Môn Đồ Hóa Cho Đấng Christ</>,
    imageUrl: "img/undraw_book_lover_mkck.svg",
    description: (
      <>
        Vậy, hãy đi dạy-dỗ muôn-dân, hãy nhân danh Đức Cha, Đức Con, và Đức
        Thánh-Linh mà làm phép báp-têm cho họ
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header
        className={classnames(
          "hero hero--primary",
          styles.heroBanner,
          styles.containerImage
        )}
      >
        <div className={classnames("container")}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={classnames("hero__subtitle", styles.heroTagLine)}>
            <p>
              là những nhóm tế bào,
              <br />
              yêu mến và vâng lời Chúa,
              <br /> là nơi lan tỏa
              <br /> tình yêu thương thật
              <br /> và môn đồ hóa cho Đấng Christ
            </p>
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/lich-sinh-hoat")}
            >
              Nhóm với chúng mình!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
