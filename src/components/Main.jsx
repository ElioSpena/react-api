import Card from "./Card";

export default function Main({ actresses, actors, selected }) {
  return (
    <main className="bg-secondary pt-5">
      <div className="container pt-5">
        {selected === "actresses" ? (
          <Card performers={actresses} />
        ) : (
          <Card performers={actors} />
        )}
      </div>
    </main>
  );
}
