import SideMenu from "../Components/SideMenu/SideMenu";

function Home(params) {
  return (
    <div className="flex flex-row">
      <div className="basis-1/6">
        <SideMenu />
      </div>
      <div className="basis-5/6">Home</div>
    </div>
  );
}
export default Home;
