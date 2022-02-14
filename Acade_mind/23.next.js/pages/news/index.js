// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-greate-framework">
            NextJS is A Great Framework!
          </Link>
        </li>
        <li>NextJS is A Great Framework!!!!</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
