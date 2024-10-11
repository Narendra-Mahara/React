import Card from "./components/Card";

let items = [
  {
    link: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Cream.png",
    title: "samsung 22",
    desc: "this is a samsung phone",
  },
  {
    link: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2024/09/Samsung-Galaxy-A06-Gold.jpg",
    title: "samsung A06",
    desc: "This is a samsung phone A06",
  },
  {
    link: "https://static-01.daraz.com.np/p/088f72b7b338c361309e30e5e2132256.jpg",
    title: "samsung A07",
    desc: "This is a samsung phone A07",
  },
  {
    link: "https://www.samsungplaza.com.np/public/files/D1BAF266D335CBD-SM-S928_Violet.png",
    title: "Samsung s22",
    desc: "This is a samsung phone",
  },
];

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Hello props!</h1>
      <div
        className="flex flex-wrap gap-5 justify-center items-center mt-5
        "
      >
        {items.map((item) => {
          return (
            <Card
              key={item.title}
              link={item.link}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </>
  );
}
