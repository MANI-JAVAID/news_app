import { Outlet } from "react-router-dom";

export default function About(props) {
  return (
    <>
      <div className="container m-5 bg-transparent ">
        <br />
        <h1 className="text-center mb-5 fs-1">ABOUT</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          voluptates reiciendis voluptatum dolorum distinctio rerum excepturi
          optio voluptatem voluptate vitae laboriosam nam obcaecati facere nobis
          suscipit vel consectetur molestias ea ipsa officia molestiae velit ad
          similique! Explicabo quidem cum necessitatibus deleniti nam dolorum
          facere, a sint minus voluptatibus aliquid architecto quae consectetur
          exercitationem ea amet qui distinctio tempore molestias accusamus
          voluptate dolores ut sed. Est suscipit tempora doloremque consectetur
          sint hic non ipsum, neque repellendus obcaecati laboriosam quod ipsa
          facilis assumenda, sit dignissimos cupiditate. Pariatur beatae amet
          voluptate illo ipsa eveniet maxime autem molestias ratione, non eius!
          In, fuga alias.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          voluptates reiciendis voluptatum dolorum distinctio rerum excepturi
          optio voluptatem voluptate vitae laboriosam nam obcaecati facere nobis
          suscipit vel consectetur molestias ea ipsa officia molestiae velit ad
          similique! Explicabo quidem cum necessitatibus deleniti nam dolorum
          facere, a sint minus voluptatibus aliquid architecto quae consectetur
          exercitationem ea amet qui distinctio tempore molestias accusamus
          voluptate dolores ut sed. Est suscipit tempora doloremque consectetur
          sint hic non ipsum, neque repellendus obcaecati laboriosam quod ipsa
          facilis assumenda, sit dignissimos cupiditate. Pariatur beatae amet
          voluptate illo ipsa eveniet maxime autem molestias ratione, non eius!
          In, fuga alias.
        </p>
      </div>
      <Outlet />
    </>
  );
}
