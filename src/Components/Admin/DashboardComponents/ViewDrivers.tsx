import AdminTable from "./AdminTable";

export default function ViewDrivers() {
  return (
    <>
      <div className="md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bg-white p-4">
        <Card title="Total Drivers" number="1234"/>
        <Card title="Drivers Online" number="1234"/>
        <Card title="On Ride" number="1234"/>
      </div>

      <AdminTable/>
    </>
  );
}

function Card({title , number}) {
  return (
    <>
    <div className="p-6 md:p-10 rounded-xl bg-blue-50">
      <div className="inline-flex rounded-full bg-white p-4"></div>
      <h3 className="mt-4 text-base md:text-xl font-medium text-gray-800">
        {title}
      </h3>
      <p className="mt-1 text-base md:text-lg text-gray-600">
        {number}
      </p>
    </div>
    
    
    
    </>
  );
}


