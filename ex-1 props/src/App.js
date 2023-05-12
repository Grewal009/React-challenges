import { getImageUrl } from "./utils.js";

function Profile({
  className,
  name,
  sr,
  url,
  width = 70,
  height = 70,
  profession,
  awards,
  discover
}) {
  return (
    <div className={className}>
      <h2>{name}</h2>
      <img
        className={sr}
        src={getImageUrl(url)}
        alt={name}
        width={width}
        height={height}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discover}
        </li>
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        className={"profile"}
        name={"Maria Skłodowska-Curie"}
        sr={"avatar"}
        url={"szV5sdG"}
        profession={"physicist and chemist"}
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal"
        ]}
        discover={"polonium (Chemical element)"}
      />

      <Profile
        className={"profile"}
        name={"Katsuko Saruhashi"}
        sr={"avatar"}
        url={"YfeOqp2"}
        profession={"geochemist"}
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discover={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
