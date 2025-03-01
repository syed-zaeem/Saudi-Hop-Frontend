const BlogNavigator = () => {
  return (
    <div className="row y-gap-30 justify-between">
      <div className="col-auto">
        <a href="#">
          <div className="d-flex items-center">
            <div className="icon-arrow-left text-20 mr-20" />
            <div className="text-18 fw-500">Prev</div>
          </div>
         
        </a>
      </div>
      {/* <div className="col-auto">
        <img src="/img/general/menu.svg" alt="image" className="pt-20" />
      </div> */}
      <div className="col-auto text-right">
        <a href="#">
          <div className="d-flex items-center justify-end">
            <div className="text-18 fw-500">Next</div>
            <div className="icon-arrow-right text-20 ml-20" />
          </div>
         </a>
      </div>
    </div>
  );
};

export default BlogNavigator;
