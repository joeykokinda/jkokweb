import React from "react";


export const posts = [
  {
    slug: "hello-world",
    title: "Hello, World",
    date: "Mar 27, 2026",
    content: (
      <div>
        <p>
          Hey, im Joey. Current junior, CS/AI student at Purdue, and I buidl things
        </p>
        <p>
          This blog is mostly going to be my thoughts on the current state of tech (I scroll X too much),
          observations, ideas I keep coming back to. I plan to also do deep
          dives into something im building/built but dont expect something too crazy technical.
        </p>
        <p>
          Fair warning: I am trying to write better and use less of an AI crutch,
          so the first couple posts might be rough to get through
        </p>
      </div>
    ),
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
