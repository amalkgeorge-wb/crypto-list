import SideMenu from "../Components/SideMenu/SideMenu";

function Organization(params) {
  return (
    <div className="flex flex-row">
      <div className="basis-1/6">
        <SideMenu />
      </div>
      <div className="basis-5/6 bg-slate-900 ">
        <div className="text-2xl font-bold text-white p-5">Organization</div>
      </div>
    </div>
  );
}
export default Organization;
