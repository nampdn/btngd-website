/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "BTNGĐ",
  tagline:
    "Là những nhóm tế bào yêu mến Chúa, là nơi lan tỏa tình yêu thương thật và môn đồ hóa cho Đấng Christ",
  url: "https://btngiadinh.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "nampdn", // Usually your GitHub org/user name.
  projectName: "btngd-website", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "BTNGĐ",
      logo: {
        alt: "My Facebook Project Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/lich-sinh-hoat", label: "Tài Liệu", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        // Please keep GitHub link to the right for consistency.
        {
          href: "https://app.btngiadinh.com",
          label: "App",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Tài Liệu",
          items: [
            {
              label: "Nhóm Nhỏ",
              to: "docs/doc1"
            },
            {
              label: "Học Kinh Thánh",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Hội Thánh",
          items: [
            {
              label: "Hội Thánh Tin Lành Việt Nam",
              href: "https://httlvn.org/"
            },
            {
              label: "Chi Hội Gia Định",
              href: "https://www.facebook.com/hoithanhtinlanhGiaDinh/"
            }
          ]
        },
        {
          title: "Liên Kết",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "Fanpage",
              href: "https://www.facebook.com/btn.giadinh/"
            },
            {
              label: "App Điều Hành Ban Ngành",
              href: "https://app.btngiadinh.com"
            }
          ]
        }
      ],
      // logo: {
      //   alt: "Facebook Open Source Logo",
      //   src: "img/oss_logo.png",
      //   href: "https://opensource.facebook.com/"
      // },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} BTN Gia Định.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/nampdn/btngd-website/edit/master/website/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
