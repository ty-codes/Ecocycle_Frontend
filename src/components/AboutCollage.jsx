import { RBin, RBottles, RHome, trashbag } from "../assets";

export default function AboutCollage () {
    return (
        <div className="collage-flex flex">
            <div className="collage-block short column">
                <img src={RHome} alt="recycled-home" />
                <img src={RBin} alt="recycled-bin" />
            </div>
            <div className="collage-block">
                <img src={RBottles} alt="recycled-bottles" />
                <img src={trashbag} alt="trashbag" />
            </div>
        </div>
    )
}