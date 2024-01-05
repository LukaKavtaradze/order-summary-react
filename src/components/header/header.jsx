import headerImage from "../../assets/illustration-hero.svg"


function  Header(){
    return(
        <img src={headerImage} alt="hero-image" className="rounded-t-[20px]" />
    )
}

export default Header