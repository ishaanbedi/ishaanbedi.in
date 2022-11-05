var socials = (req, res) => {
  res.status(200).json({
    GitHub: { link: "https://www.github.com/ishaanbedi" },
    LinkedIn: { link: "https://www.linkedin.com/in/ishaanbedi13" },
    Twitter: { link: "https://www.twitter.com/ishnbedi" },
    CodePen: { link: "https://www.codepen.io/ishaanbedi" },
  });
};
export default socials;
