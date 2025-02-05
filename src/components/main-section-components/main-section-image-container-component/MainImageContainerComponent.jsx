import img_1 from "../../../images/girl-img.svg";
import img_2 from "../../../images/Mask-Group.svg";
import img_3 from "../../../images/Rectangle142.svg";
import img_4 from "../../../images/Rectangle143.svg";

export default function MainImageContainerComponent() {
    return (
        <div className="main-image-container">
            <img src={img_1} alt="Image 1" className="img-1" />
            <img src={img_2} alt="Image 2" className="img-2" />
            <img src={img_3} alt="Image 3" className="img-3" />
            <img src={img_4} alt="Image 4" className="img-4" />
        </div>
    );
}