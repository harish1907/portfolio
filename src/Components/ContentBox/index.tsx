const ContentBox = ({ heading, text, serviceType, icon, height, width }: any) => {
  return (
    <div className="col-lg-3">
      <div className={`service-item ${serviceType}`}>
        {/* {icon && <div className="icon"></div>} */}
        {icon !== "notRequired" && <img src={icon} alt="icon" className="icon" width={width} height={height} />}
        <h4>{heading}</h4>
        <p>{text}</p>
        <div className="text-button">
          {/* <a href="#">
            Read More <i className="fa fa-arrow-right"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
