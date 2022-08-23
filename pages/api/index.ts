var data = {
  name: "Ishaan Bedi",
  githubUsername: "ishaanbedi",
  linkedinUsername: "ishaanbedi13",
  twitterUsername: "ishnbedi",
  dribbleUsername: "ishaanbedi",
  avatarURL: "https://avatars.githubusercontent.com/u/39641326?v=4",
  userLocation: "Delhi, India",
  email: "hi@ishaanbedi.in",
};

export default function handler(req, res) {
  res.status(200).json(data);
}
