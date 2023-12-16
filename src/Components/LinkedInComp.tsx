import Icon from "../extra/assets/images/linkedin.png";

export default function LinkedInComp({ url }: any) {
  return (
    <a href={url} target="_blank">
      <img src={Icon} style={{ height: "30%", width: "30%", objectFit: "contain", marginLeft: "-15px" }} />
    </a>
  );
}
