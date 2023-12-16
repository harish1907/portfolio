import Icon from "../extra/assets/images/github.png";

export default function GithubComp({ url }: any) {
  return (
    <a href={url} target="_blank">
      <img src={Icon} style={{ height: "30%", width: "30%", objectFit: "contain", marginLeft: "-30px" }} />
    </a>
  );
}
