import React from "react";
import PD from "../../assets/About/pd.jpeg";
// import TwitterIcon from "../../assets/socialIcons/twitter.png";
// import LinkedInIcon from "../../assets/socialIcons/linkedin.png";
// import GithubIcon from "../../assets/socialIcons/github.png";

const teamMembers = [
  {
    name: "pd",
    position: "Designer",
    image: PD,
    socialMedia: [
      { icon: PD, link: "https://twitter.com/example" },
      { icon: PD, link: "https://linkedin.com/example" },
      { icon: PD, link: "https://github.com/example" },
    ],
  },
  {
    name: "pd",
    position: "Designer",
    image: PD,
    socialMedia: [
      { icon: PD, link: "https://twitter.com/example" },
      { icon: PD, link: "https://linkedin.com/example" },
      { icon: PD, link: "https://github.com/example" },
    ],
  },
  {
    name: "pd",
    position: "Designer",
    image: PD,
    socialMedia: [
      { icon: PD, link: "https://twitter.com/example" },
      { icon: PD, link: "https://linkedin.com/example" },
      { icon: PD, link: "https://github.com/example" },
    ],
  },
  {
    name: "pd",
    position: "Designer",
    image: PD,
    socialMedia: [
      { icon: PD, link: "https://twitter.com/example" },
      { icon: PD, link: "https://linkedin.com/example" },
      { icon: PD, link: "https://github.com/example" },
    ],
  },
  {
    name: "pd",
    position: "Designer",
    image: PD,
    socialMedia: [
      { icon: PD, link: "https://twitter.com/example" },
      { icon: PD, link: "https://linkedin.com/example" },
      { icon: PD, link: "https://github.com/example" },
    ],
  },
  {
    name: "pd",
    position: "Designer",
    image: PD,
    socialMedia: [
      { icon: PD, link: "https://twitter.com/example" },
      { icon: PD, link: "https://linkedin.com/example" },
      { icon: PD, link: "https://github.com/example" },
    ],
  },
  // Add more team members as needed
];

const TeamMember = () => {
  return (
    <div>
      <h1 className="text-4xl font-ExtraCondensedBlack text-center uppercase py-10">
        {" "}
        Our <span className="text-mainOrange">Team</span>
      </h1>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-80 h-auto rounded overflow-hidden shadow-lg m-4"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{member.name}</div>
              <p className="text-gray-700 text-base mb-2">{member.position}</p>
            </div>
            <div className="flex justify-center ">
              <img
                className="w-60 h-auto rounded-40"
                src={member.image}
                alt={`Image of ${member.name}`}
              />
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-center space-x-4">
                {member.socialMedia.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="text-black hover:text-orange-700"
                  >
                    <img
                      src={social.icon}
                      alt={`${member.name}'s ${idx + 1} social media`}
                      className="w-8 h-8"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
