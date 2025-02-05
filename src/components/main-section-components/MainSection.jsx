import MainTextContainerComponent from "./main-section-text-container-component/MainTextContainerComponent";
import "../../styles/Main.css";
import MainImageContainerComponent from "./main-section-image-container-component/MainImageContainerComponent";
export default function MainSection() {
    return (
        <main>
            <MainTextContainerComponent />
            <MainImageContainerComponent />
        </main>
    );
}