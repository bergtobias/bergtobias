export default async function Home() {
  const podname = process.env.POD_NAME || "unknown";
  return (
    <div className="grid min-h-screen justify-center items-center">
      Tobias Berg
      <p> Currently running on pod {podname}</p>
    </div>
  );
}
