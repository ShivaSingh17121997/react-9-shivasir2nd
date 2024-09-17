import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Slider = () => {
    return (
        <AwesomeSlider animation="cubeAnimation">
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvEvYGH8Vk5NhYoDZCoaXmNnA923dOPZaYg&s" alt="" />
            </div>
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvEvYGH8Vk5NhYoDZCoaXmNnA923dOPZaYg&s" alt="" />

            </div>

        </AwesomeSlider>
    )
}


export default Slider;
