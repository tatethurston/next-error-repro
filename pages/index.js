export default function Home() {
  return <div>Homepage!</div>;
}

export async function getServerSideProps(context) {
  throw new Error("Error in index.js getServerSideProps!");
  return {
    props: {
      nestedData: {
        field: "some-data",
      },
    },
  };
}
