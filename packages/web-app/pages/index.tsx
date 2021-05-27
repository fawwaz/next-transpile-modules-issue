import { Button } from "@project/web-ui";

const IndexPage = () => {
  return (
    <div>
      <h1>Hello world !</h1>
      <Button onClick={() => console.log("test")} label="sample button" />
    </div>
  );
};

export default IndexPage;
