
import one from "../assests/images/one.jpg"
import two from "../assests/images/two.jpg"
import three from "../assests/images/three.jpg"
//images

function PerfumeImages() {
  return (
    <div className="imagecontainer">
      <div className="image">
        <img src={one} alt="image1"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div className="image">
        <img src={two} alt="img2"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>

      </div>
      <div className="image">
        <img src={three} alt="img3"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>

      </div>
    </div>
  )

}


export default  PerfumeImages