"use client";

import React from "react";
import useCounter from "../components/useCounter";

function Web() {
  const [count, count1, Increment, Decrement] = useCounter();

  return (
    <>
      <div className="container">
        <div className="project1">
          <div className="thumbnail">
            <img src="./p1.jpg" alt="" />
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              sapiente exercitationem, excepturi aperiam nisi iure facere
              numquam autem, in repellat vero veritatis reiciendis aliquid
              quidem accusamus sit, assumenda id consequuntur. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptas dolorem,
              doloremque est voluptatibus nam praesentium provident aliquid odio
              suscipit rem! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ratione fugiat beatae quasi perferendis, officiis tempore
              obcaecati, est fuga aut in qui cum reprehenderit modi rerum fugit,
              asperiores distinctio quas ullam laborum. Sequi, rem. Fuga quia ab
              cumque, dolore saepe sit ipsum quaerat perferendis, totam fugiat
              sint amet consequuntur nesciunt. Minus mollitia vero, fugiat
              eligendi facilis saepe, blanditiis qui temporibus error id eveniet
              totam quod ab voluptatibus perspiciatis harum facere, minima cum
              veniam quas! Omnis, rerum hic qui vero assumenda temporibus modi
              in magni harum aspernatur aut quo quae quasi nesciunt illum
              accusamus, reprehenderit adipisci.
              <div className="icons">
                <div className="like">
                  <img src="./like.png" alt="" onClick={Increment} />{" "}
                  <p>{count}</p>
                </div>
                <div className="dislike">
                  <img src="./dislike.png" alt="" onClick={Decrement} />{" "}
                  <p>{count1}</p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="project2">
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              sapiente exercitationem, excepturi aperiam nisi iure facere
              numquam autem, in repellat vero veritatis reiciendis aliquid
              quidem accusamus sit, assumenda id consequuntur. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptas dolorem,
              doloremque est voluptatibus nam praesentium provident aliquid odio
              suscipit rem! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ratione fugiat beatae quasi perferendis, officiis tempore
              obcaecati, est fuga aut in qui cum reprehenderit modi rerum fugit,
              asperiores distinctio quas ullam laborum. Sequi, rem. Fuga quia ab
              cumque, dolore saepe sit ipsum quaerat perferendis, totam fugiat
              sint amet consequuntur nesciunt. Minus mollitia vero, fugiat
              eligendi facilis saepe, blanditiis qui temporibus error id eveniet
              totam quod ab voluptatibus perspiciatis harum facere, minima cum
              veniam quas! Omnis, rerum hic qui vero assumenda temporibus modi
              in magni harum aspernatur aut quo quae quasi nesciunt illum
              accusamus, reprehenderit adipisci.
              <div className="icons">
                <div className="like">
                  <img src="./like.png" alt="" onClick={Increment} />{" "}
                  <p>{count}</p>
                </div>
                <div className="dislike">
                  <img src="./dislike.png" alt="" onClick={Decrement} />{" "}
                  <p>{count1}</p>
                </div>
              </div>
            </p>
          </div>
          <div className="thumbnail">
            <img src="./p2.jpg" alt="" />
          </div>
        </div>
        <div className="project1">
          <div className="thumbnail">
            <img src="./p3.jpg" alt="" />
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              sapiente exercitationem, excepturi aperiam nisi iure facere
              numquam autem, in repellat vero veritatis reiciendis aliquid
              quidem accusamus sit, assumenda id consequuntur. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptas dolorem,
              doloremque est voluptatibus nam praesentium provident aliquid odio
              suscipit rem! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ratione fugiat beatae quasi perferendis, officiis tempore
              obcaecati, est fuga aut in qui cum reprehenderit modi rerum fugit,
              asperiores distinctio quas ullam laborum. Sequi, rem. Fuga quia ab
              cumque, dolore saepe sit ipsum quaerat perferendis, totam fugiat
              sint amet consequuntur nesciunt. Minus mollitia vero, fugiat
              eligendi facilis saepe, blanditiis qui temporibus error id eveniet
              totam quod ab voluptatibus perspiciatis harum facere, minima cum
              veniam quas! Omnis, rerum hic qui vero assumenda temporibus modi
              in magni harum aspernatur aut quo quae quasi nesciunt illum
              accusamus, reprehenderit adipisci.
              <div className="icons">
                <div className="like">
                  <img src="./like.png" alt="" onClick={Increment} />{" "}
                  <p>{count}</p>
                </div>
                <div className="dislike">
                  <img src="./dislike.png" alt="" onClick={Decrement} />{" "}
                  <p>{count1}</p>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="project2">
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              sapiente exercitationem, excepturi aperiam nisi iure facere
              numquam autem, in repellat vero veritatis reiciendis aliquid
              quidem accusamus sit, assumenda id consequuntur. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptas dolorem,
              doloremque est voluptatibus nam praesentium provident aliquid odio
              suscipit rem! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ratione fugiat beatae quasi perferendis, officiis tempore
              obcaecati, est fuga aut in qui cum reprehenderit modi rerum fugit,
              asperiores distinctio quas ullam laborum. Sequi, rem. Fuga quia ab
              cumque, dolore saepe sit ipsum quaerat perferendis, totam fugiat
              sint amet consequuntur nesciunt. Minus mollitia vero, fugiat
              eligendi facilis saepe, blanditiis qui temporibus error id eveniet
              totam quod ab voluptatibus perspiciatis harum facere, minima cum
              veniam quas! Omnis, rerum hic qui vero assumenda temporibus modi
              in magni harum aspernatur aut quo quae quasi nesciunt illum
              accusamus, reprehenderit adipisci.
              <div className="icons">
                <div className="like">
                  <img src="./like.png" alt="" onClick={Increment} />{" "}
                  <p>{count}</p>
                </div>
                <div className="dislike">
                  <img src="./dislike.png" alt="" onClick={Decrement} />{" "}
                  <p>{count1}</p>
                </div>
              </div>
            </p>
          </div>
          <div className="thumbnail">
            <img src="./p4.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Web;
