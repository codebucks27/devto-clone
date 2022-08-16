import React from "react";
import CardComponent from "./CardComponent";
const listings = [
  {
    id: 1,
    mainTitle: "SOC3 gives users the freedom to connect and interact with whomever they want.",
    subText: "Highlight",
  },
  {
    id: 2,
    mainTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    subText: "Events",
  },
  {
    id: 3,
    mainTitle: "Web3 Dev Wanted!",
    subText: "jobs",
  },
  {
    id: 4,
    mainTitle: "FREE COURSE, this weekend only: Ship better code faster",
    subText: "education",
  },
  {
    id: 5,
    mainTitle: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
    subText: "misc",
  },
];
const news = [
  {
    id: 1,
    mainTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. ",

    newarticle: true,
  },
  {
    id: 2,
    mainTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. ",

    newarticle: true,
  },
  {
    id: 3,
    mainTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. ",

    newarticle: true,
  },
  {
    id: 4,
    mainTitle:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. ",
    subText: "1 comment",
    newarticle: false,
  },
  {
    id: 5,
    mainTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. ",

    newarticle: true,
  },
];

const help = [
  {
    id: 1,
    mainTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",

    newarticle: true,
  },
  {
    id: 2,
    mainTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    subText: "2 comments",
    newarticle: false,
  },
  {
    id: 3,
    mainTitle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    subText: "5 comments",

    newarticle: false,
  },
];

const RightSidebar = () => {
  return (
    <aside className="rightBar">
      <div className="rightBar__card-hackathon">
        <p>
          <img src="https://picsum.photos/200/300" alt="" />
        </p>
        <h2>
          <a href="/#">Looking for a social app that isn't centralized and controlled by a single entity?</a>
        </h2>

        <p>
        Look no further than our decentralized social app! Soc3 gives users the freedom to connect and interact with whomever they want, without having to worry about censorship or data misuse.
          <strong>
            <a href="/#">&nbsp;Register Now!</a>
          </strong>
        </p>
      </div>

      <CardComponent tag="Listings" articles={listings} />

      <CardComponent tag="#news" articles={news} />

      <CardComponent tag="#help" articles={help} />
    </aside>
  );
};

export default RightSidebar;
