import Card from "./Card";

export default function Main({ actresses, actors, selected }) {
  let performers;

  if (selected === "actors") performers = actors;
  else if (selected === "actresses") performers = actresses;
  else performers = [...actors, ...actresses];

  return (
    <main className="bg-secondary pt-5">
      <div className="container pt-5">
        <Card performers={performers} />
      </div>
    </main>
  );
}
