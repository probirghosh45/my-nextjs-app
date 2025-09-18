const DynamicBlogPage =  async({params} : {
  params : Promise <{blogId : string}>
}) => {
  // console.log( await params)
  const {blogId} = await params

  return (
    <div>
      <h1 className="text-4xl">Dynamic Blog Page {blogId}</h1>
    </div>
  );
};

export default DynamicBlogPage;
