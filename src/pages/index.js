import * as React from "react";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";

// const IndexPage = () => {
const IndexPage = ({ data }) => {
  const days = data.allMarkdownRemark.nodes;
  const [openedDayId, setOpenedDayId] = useState(days[0].id || 0);
  const [lang, setLang] = useState("ua");
  console.log(days);
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <ul>
        {days
          ? days?.map(({ id, frontmatter }) => {
              return (
                <li key={frontmatter.title}>
                  <button onClick={() => setOpenedDayId(id)}>
                    {frontmatter.title}
                  </button>
                </li>
              );
            })
          : null}
      </ul>
      <ul>
        {days
          ? days
              ?.find((day) => openedDayId === day.id)
              ?.frontmatter?.subhead?.map(
                ({ subhead_title, questions }, index) => {
                  return (
                    <div key={index}>
                      <h3>{subhead_title}</h3>
                      <ul key={index}>
                        {questions.map((question, index) => {
                          return (
                            <li key={index}>
                              <h2>{question.question_title}</h2>
                              <p>{question.description}</p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }
              )
          : null}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: { language: { eq: "ua" } } }) {
      nodes {
        frontmatter {
          chapter
          language
          title
          subhead {
            subhead_title
            questions {
              question_title
              description
            }
          }
        }
        id
      }
    }
  }
`;

// export const query = graphql`;
//   query MainPage {
//     allMarkdownRemark(filter: { frontmatter: { language: { eq: "ua" } } }) {
//        nodes {
//       frontmatter {
//         chapter
//         language
//         title
//         subhead {
//           Subhead_title
//           questions {
//             description
//             question_title
//             image {
//               alt
//               image {
//                 relativePath
//               }
//             }
//           }
//         }
//       }
//       id
//     }
//   }
// `;
