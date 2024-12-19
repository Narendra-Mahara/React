import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="p-5 flex gap-4">
        <div className="max-w-xs rounded-md shadow-md bg-slate-300 ">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.dCCgEaaPpA5MF3EFupvL5QHaGq&pid=Api"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Where the Wild Things Are
              </h2>
              <p className="">
                Written and illustrated by Maurice Sendak, this classic tale
                follows young Max, who, after being sent to bed without dinner,
                imagines sailing away to a forest inhabited by wild creatures.
                Celebrated for its imaginative story and captivating
                illustrations, it won the Caldecott Medal.
              </p>
            </div>
            <Link to="/books/where-the-wild-things-are">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-xs rounded-md shadow-md bg-slate-300 ">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.SZCPiGciM_3RXgy26G8MlQAAAA&pid=Api"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                The Giving Tree
              </h2>
              <p className="">
                Authored and illustrated by Shel Silverstein, this poignant
                story depicts the relationship between a boy and a tree,
                highlighting themes of selflessness and unconditional love. Its
                simple yet profound narrative has touched readers for
                generations.
              </p>
            </div>
            <Link to="/books/the-giving-tree">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-xs rounded-md shadow-md bg-slate-300">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.bUE1XhnNjVGFk8cF5AeIaQHaHa&pid=Api"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Goodnight Moon
              </h2>
              <p className="">
                Written by Margaret Wise Brown and illustrated by Clement Hurd,
                this soothing bedtime story features a little bunny bidding
                goodnight to various objects in his room. Its rhythmic, rhyming
                text and gentle illustrations make it a timeless favorite for
                young children.
              </p>
            </div>
            l
            <Link to="/books/goodnight-moon">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-xs rounded-md shadow-md bg-slate-300 ">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.XuulRkrrnTZKNll96nzcgwHaD4&pid=Api"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">The Dot</h2>
              <p className="">
                Written and illustrated by Peter H. Reynolds, this inspiring
                story encourages creativity and self-expression as it follows a
                young girl named Vashti, who begins a journey of artistic
                discovery starting with just a simple dot. It's a celebration of
                the creative spirit in everyone.
              </p>
            </div>
            <Link to="/books/the-dot">
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
              >
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
