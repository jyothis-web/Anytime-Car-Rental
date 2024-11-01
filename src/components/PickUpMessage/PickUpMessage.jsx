import"./PickUpMessage.css";
const PickUpMessage = () => {
      return (
        <div className="message-search-container">
          <div className="search-item">
            <label className="text-sm-bold neutral-500">Pick Up Location</label>
            <div className="input-dropdown">
              <input
                className="input-control"
                type="text"
                placeholder="Pick Up Location"
              />
            </div>
          </div>
          <div className="search-item">
            <label className="text-sm-bold neutral-500">Drop Off Location</label>
            <div className="input-dropdown">
              <input
                className="input-control"
                type="text"
                placeholder="Drop Off Location"
              />
            </div>
          </div>
          <div className="search-item">
            <label className="text-sm-bold neutral-500">Pick Up Date</label>
            <div className="input-dropdown">
              <input className="input-control" type="date" />
            </div>
          </div>
    
          <div className="search-item button-container">
            <button className="btn btn-brand-2 text-nowrap">Send Message</button>
          </div>
        </div>
      );
    };
    
    export default PickUpMessage;
    