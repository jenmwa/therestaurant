import axios from "axios";

async function getData(id: string) {
  //const res = await axios.get("https://api.example.com/" + id);
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  // return res.json()
  return {
    foobar: "foobar",
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const booking = await getData(params.id);
  return (
    <div style={{ marginTop: "200px" }}>
      My Post: {params.id}, {booking.foobar}
    </div>
  );
}
