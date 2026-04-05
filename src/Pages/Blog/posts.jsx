import React from "react";


export const posts = [
  {
    slug: "solo-hacking-today-is-the-best-choice",
    title: "Solo hacking today is the best choice and here is why",
    date: "Apr 5, 2026",
    content: (
      <div>
        <p>
          There is a big flaw with bigger groups at hackathons today and I call it AI clutter.
        </p>
        <p>
          Let's look at an example where a team has 4 AI instances running (Claude Code, Codex, etc.), one for each person. All these instances have their own unique human user who has their own unique style/idea etc. This means that when prompting, these prompts can conflict and different trails can be created in the codebase. Obviously there are many solutions to a single problem, so when you have more instances running there is a higher chance that they find a separate solution and start going down that path. So now you have group members working on the same project but the codebase is all conflicting and will lead to many other bigger problems down the road. This is really funny because unlike in the past when you had to write code by hand (no way people did that), you now have too much output as a team of 4 that it is diminishing return.
        </p>
        <p>
          But as a solo, usually the limiting factor at hackathons would be how fast you could code. When limited by sheer output of code a group of 3/4 people would run circles around you and you wouldn't have much of a chance at these competitions. But today this landscape has changed, now you are on the same playing field thanks to my boy here → [Claude logo]. With [insert AI tooling here] I can now as a solo generate and ideate just as fast or even faster than a team of 4.
        </p>
        <p>
          What inclined me to write about this? I just built AgentTrust at ETH Denver as a solo and I would say it was a better and more challenging experience.
        </p>
        <p>The obvious upsides:</p>
        <ul>
          <li>You take home more of the prize money</li>
          <li>Every decision is yours to make without arguing about it for an hour</li>
          <li>No git conflicts, no "wait who's working on what," it's just you and your editor</li>
        </ul>
        <p>But that cuts both ways:</p>
        <ul>
          <li>Every decision being yours means the stuff you hate doing also needs to be done by you</li>
          <li>You need to ideate with yourself on critical decisions as there are no team members to consult</li>
          <li>Tasks you didn't even know existed until 2am — all yours</li>
        </ul>
        <p>
          Also a more personal challenge that I faced was presenting. When you are solo there is no one to hand the mic to. Everything is all on you with nobody to blame but yourself. I think that this was by far my biggest problem and if I were to have a teammate for the presentation I would have won, but this is something I can get better at with more practice.
        </p>
        <p>
          One last thing I found interesting was the social aspect. At home grinding solo feels normal, but at a hackathon where everyone around you has a group to bounce off, you're just locked in talking to Claude.
        </p>
        <p>
          I think that in the future the lean member method, either running solo or duo, for hackathons will become the new standard. Either way, the days of needing 4 people just to keep up on output are done.
        </p>
      </div>
    ),
  },
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
