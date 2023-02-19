import GitHubCalendar from "react-github-calendar";
const GithubGraph = () => {
  return (
    <div>
      <h3 className="font-semibold">This year on GitHub, so far:</h3>
      <div className="py-3 select-none">
        <GitHubCalendar
          blockMargin={2}
          hideColorLegend={true}
          username="ishaanbedi"
        />
      </div>
    </div>
  );
};

export default GithubGraph;
