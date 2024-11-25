import car from "../images/1.avif"

const CarNotFound = () => {
  return (
    <div>
      <h3 className="text-white" style={{textAlign:"center"}}>Car Not Found</h3>
      <img src={car} alt=""  width={"100%"}/>
    </div>
  )
}

export default CarNotFound