import SideMenu from "../Components/SideMenu/SideMenu";

function Organization(params) {
  return (
    <div className="flex flex-row">
      <div className="basis-1/6">
        <SideMenu />
      </div>
      <div className="basis-5/6">Organization</div>
    </div>
  );
}
export default Organization;
