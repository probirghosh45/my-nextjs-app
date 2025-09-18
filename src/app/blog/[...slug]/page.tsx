const CatchAllRoute = async ({params} : { params : Promise<{slug : string}>} ) => {

  const {slug} = await params  
  return (
    <div>
      <h1 className="text-4xl">catch all route {slug}</h1>
    </div>
  );
};

export default CatchAllRoute;
