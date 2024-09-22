
import { useState } from "react"
import { Modals } from "../utils/Modals"


const Slider = () => {

  const [data, setData] = useState(0)


  const handlePrevSlider = () => {
     setData((prevSlider) => prevSlider === 0 ? Modals.length  - 1 : prevSlider - 1)
  }

  const handleNextSlider = () => {
 setData((prevSlider) => prevSlider === Modals.length -1 ? 0 : prevSlider + 1);
  }
    
  return (
    <div className="container">
      <button className="prevSlider" onClick={handlePrevSlider}>
        ❮
      </button>
      <div className="box">
        {/* Show only the image at the current index */}
        <div className="imgDetails">
          <img src={Modals[data].image_url} alt={Modals[data].id} />
        </div>
      </div>
      <button className="nextSlider" onClick={handleNextSlider}>
        ❯
      </button>
    </div>
  );
}

export default Slider



