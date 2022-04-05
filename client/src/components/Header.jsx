import { useHistory } from "react-router";
import { selectUser } from "../features/userSlice";
import {useSelector} from "react-redux";

function Header(){
    const user=useSelector(selectUser);
    let history=useHistory();
    return(
      <header>
        <section class="heading-container bg-dark">
            <div class="heading base-pad d-flex justify-content-between align-items-end">
                <p id="homepage-date" class="mb-1 header-font">Friday, Oct 22, 2021</p>
                <h1 class="nw-font" style={{cursor:"pointer"}} onClick={e=>history.push("/home")}>The 12<sup>th</sup>man</h1>
                <section class="buttons d-flex justify-content-between align-items-center">
                    <p class="my-1 text-bold"></p>
                    <button class="text-bold" onClick={e=>history.push("/")}>Logout</button>
                </section>
            </div>
        </section>

        <nav id="nav-1" class="position-relative border-bottom">
            <div class="trapezoid">
                <div class="links d-flex justify-content-between">
                    <a class="text-bold text-dark text-decoration-none" href="">Latest News</a>
                    <a class="text-bold text-dark text-decoration-none" onClick={e=>history.push("/fixtures")}>Fixtures</a>
                    <a class="text-bold text-dark text-decoration-none" onClick={e=>history.push("/table")}>League Table</a>
                    <a class="text-bold text-dark text-decoration-none" onClick={e=>history.push("/community")}>Chat section</a>
                    <a class="text-bold text-dark text-decoration-none" onClick={e=>history.push("/club")}>Your Club</a>

                </div>
            </div>
        </nav>
        <nav id="nav-2" class="base-pad border-bottom">
            <a class="text-bold text-decoration-none" href="https://www.manutd.com/en/news/detail/ole-gunnar-solskjaer-reacts-to-man-utd-3-atalanta-2-champions-league">Manchester United</a>
            <a class="text-bold text-decoration-none" href="">Liverpool</a>
            <a class="text-bold text-decoration-none" href="">Manchester City</a>
            <a class="text-bold text-decoration-none" href="">Chelsea</a>
            <a class="text-bold text-decoration-none" href="">Tottenham</a>
            <a class="text-bold text-decoration-none" href="">Arsenal</a>
            <a class="text-bold text-decoration-none" href="">Leicester</a> 
            <a class="text-bold text-decoration-none" href="">West Ham</a>
            <a class="text-bold text-decoration-none" href="">Crystal Palace</a>
            <a class="text-bold text-decoration-none" href="">Aston Villa</a>
            <a class="text-bold text-decoration-none" href="">Southampton</a>
            <a class="text-bold text-decoration-none" href="">Everton</a>
            <a class="text-bold text-decoration-none" href="">Brentford</a>
            <a class="text-bold text-decoration-none" href="">Wolves</a>
        </nav>
</header>
);
}

export default Header;