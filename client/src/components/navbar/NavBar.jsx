import "./navbar.scss"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


const NavBar = () => {
    const {toggle, darkMode} = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                <span>Ozi!</span>
                </Link>
                <i class='bx bx-home-alt-2'></i>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAUhJREFUSEvt1u01BDEUxvH/VoAKKEEJVIAKUMHqAB1QASqgA0pQAh3YCjjPOcmcO5FMcjO7Z79sPu3LJL8kk/vMLNhSW2zJZQ58BfwCLz2T74WfgcsA6vO1F++BLRo9N+6FLboK6l7Pyj1wip4E8ANw461wDv0M8DHgxlvgKTTeYzdeg1vQLnwK9qBuvAT3oC48B89Bm/EUTsPhHrjzplK4Xv1uTd9RyFhY2fuUIOuENbSiVRMYPSTOgdcNwxfAWwrru+pxH3gPE0hXfAOcFbZeAz6a/+xWnwI/QAyd4mNRjzs1Cz8Ay8r9FqzJqVn43yEulVMOjr99A1/JBI6Aw7Cqg03BuQOXW93aV7yDSwdpt9WjQiiVk4o9vs50RvXQTeWncmuCc7ndO4Ehn+0AUy8Cik/l95ymGB1ishWeA1b71t65qgP0XvAHmAp0H0haYRYAAAAASUVORK5CYII="/>
                 {darkMode ? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAapJREFUSEvdlv0xBEEQxd9FgAjIgBCIABEgAyJAJIgAEZCBkwERIAP125qu6hs9H7eHVaZq/9jZnn7zet683pkmGrOJcDUWeEvSUdr0jaSXZQmMBd6V9JDA9iQ9/gvgHUk81wGbHsbHkubp+ZKiVGoAKeW6pJMAnHliGCR/zzIDepXmOQpiFkYJ2BZacAReOtautTVxWYIPSZTW7xrG2wn5OWNMJRDbWqFaw7KWqvNzIum5pIOM7p2kS7e5mj66gH3+vIR5qTnns4IYu8WVB8LgyU1iGrBkwN7MBPBQTL3iyuMA2U+Thw7U4gC/TS/3wVFUGWODmy7CRIOQ3tI8TCl5NLjvxnwjCc6LkDWvZq9eXBdJOJbUrNCbRcQ2Yh2tJQ4BgrOg6smAKTWPDXOkVUttDkdeutjQyVr32Dbxo+IqaGaYzq8TQvLXyQQXuVyYt5cxi1sGAujpdxlIZJmI0O60seHuMm9+vpJl1lpbrS22Wuqw2T/XFlutrdYWvR6KYquJa5Jfn9rV4lvPP1c1xzLXySeaDBhrNdPATH7th751FM3vY0vdTNwK+ASvPH4fELj6TAAAAABJRU5ErkJggg==" onClick={toggle}/>: 
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAfZJREFUSEvllv0xBEEQR99FQAaIABkQASJwIiADRIAIEAEi4CJABIgAEVBPzagxtx+zu3d1f+iqLXfYef3x654esSAbLYhLV/AGsANcAB9DnC4Fj4FDQLB2B+zOE7wM3ABbGeQa0Jne1hSx0QldDae/ASvh8ylw0psKtTUW9ggYsWZNBb2H73vA7azBwu6Teh4AVwHyFX6mv+vFr0q1kR0nkR4lJ0fwzFNttC8hxdY01jeyn4D1eahapV4GyjbwkOXxPLSVv14DXnvluUJcCsYB8ZkIKz3bDJiRKLi0DJ18yGvsNFoCmvpUoe0PVXcOLhGPUVtrHdRRS+L3TtYHLMBx6XDRhNvXuR4aHekL9tBUiH63BLZZkeDqwE6qEuEIV+mmPW25ONV0wtL42KoOnp9bLQdHVfuC7VJiHircbmiz38GTg43yLLxd1cdNB3upmAHrHy+T/P83oxBzcNqnikX4ENMJA/HcSXq9Vs3qdDoNvQxqz6oCKwJrPKhPM9VPbSx1i4D18j6O5o2lMEpMx533cTXysvG8Pzta0waS96nTydQ3TSlhQuMC4cx3bZp6p23Z8yVbLO1TPfcgHz8LMaJ8L3sOUVcOlDawqVWRpjpeDG3pNkpF5VO7ApeAI0gHTKUlcBnITQGZHZ/WnbsLuC3STn//f+BvTGhqH87+r4sAAAAASUVORK5CYII="  onClick={toggle}/>}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAU9JREFUSEvtln1RAzEQxX+noOCgDgoKAAc4ABS0OAAFgAMsVAHFAShocVAcdB6TMNtMEpYh07thLv+19zYv+/V2O3o6XU+8DIr4CJj9EInX5PsJMKnYfAAb+z31eAqsHeF/AhYB9wxcOWyOgW3EpcTnwIvjEnksrM4KOHPYXATsF7RGfAu8JRc+hjTkiN9NFKKZUvAQfriJ94CJdzli+18kthEcifeyWAzNIUOtwvou/0CsYlGf53IsbFqMwspGx53jWocsgctfttOpfVhOMtUy8ZUl8jvTk0qPxETelY5U67qmXA4daAMZ1JCI6lRz7T4J9dwR6ptaqL1a3by4LLG0N9dOGn+5dvostFMcse52GrXazt7/OZ2kRrlFQKqW81jYuA7ZRUDt2Uyrm68+vS17CokdZSX10oJnTxyXtSFRXW/bTADHLYMaEo73/h2yAwLihh+wuX+qAAAAAElFTkSuQmCC"/>
                <div className="search">
                    <div className="search-box">
                            <input type="text" name="" class="search-txt" placeholder="Type to search"/>
                            <a class="search-btn" href="#">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAahJREFUSEvlluExhEEMht+rABWgAlSADqgAHVABKkAFqMB1gAroABWgAuYx2ZnMd7ub3Ruf+yF/bm4uu0+SN5vcRAuyyYK46gHvSNqQtCzpQ9KzpMd5A4/Aa5JOJR0WAAQwlXQu6bUniBr4WNJFx2X4X7X6l8A3kg7cJbeW2YOVmXJT+r2BH+eOWuA5sM/0zS5Hz5JtWlCr5nAi6TKCD8Fo+mKHgHIpOkZGBQguwdcjzYdgX+ItuyyCpt8J8sm+IE2pIX9chuCv1oOFaFLgVGmlFrEH0yz35rxvurVmm/xotjv7siuJZsyaB/umItoWbYeXovV7S5N58JkNi5wEPZknuRgq3PnnGVflGlPj6qsYdjW6LkkKn0PQ1aFcY73jqr65qPzkYttQrpbuppsZHpz/tM/quWhWA6dJolnN2wWKNcnUup2YSOxdFj+ZkOG2LZDcaGRDcaZov7WPKS+B+VVahbf8A2EIMArp9pzRSKxBKkH2186pCI/AHsQsZwOlFYj+Oe2b4D3gnrEZwscCE6SHz5R8THCC8znT4WOD53pOPZp2+/6/jL8BYKZfH7ncP7MAAAAASUVORK5CYII="/>
                            </a>
                        </div>
                </div>
            </div>
            <div className="right">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcxJREFUSEvlle0xBEEQhp+LgAwQASJABmRABIgAESACIZABIkAEhEAE1KNmrub2ZmZ7+eGHrrrarduefvt9pz9m/JHN/giXnwLvApsp6WfgcSqBqcD7wA2wOgB6B46Au2gCU4CvgOORwKeAfqMWBVba+xRNWQ3+AMhUFU6AnfR9L33rgkeBvUfv9AXYakR8A9YAfbfHKEeBP1OgnpTnwFnyG4076gCUMvdkjPp95xYBXgdeE5ODTuUeporXdQNQ+qZFgD1sEa0A16mQagFz1X9U2m3JPwpctlJN7lLmXnLzBKLADgzbJ08r363e3E650ntVv8A6Cuwh79rJlMGH8tnf3nP3bvOhKcD5jMPCoZFZytyEQhPrN8BjsyH0PcpYdkrsszW5ZO7Pe/b5q5FpUbmNlHaKKb3byuKrWo9xbQXaoy02KmGvZ+uuyhawQZ6KIPamxTNWsVa+xVeuTxfGUrIt4LyNZChz+3aKeeY2HahuqxpwuWXCi72Slcwv0/8XgHHnVgOWnUs9PIU6UmTlHC6O1S5w3r1LWU7ROvk2d/SQcVlUvRUYzaG864UiGwJPWuYB9Ga8IbADo5zBzQEQANWlGS86MoM4cbf/B/wF5GpcH3yxaxIAAAAASUVORK5CYII="/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWxJREFUSEvtluExBEEQRt9FQAZk4GQgA0SACI4IEAEiIANE4EIgAzIgAupdTauptTdr76Zu/2z/292Zft1fd8/shIFsMhCXEbwx5ZtSnwKXwG7lCN6Ba+Ah/ObgA+ClMrDpbh949WUOvkrZ+t7oapoqhl85S8F+rAVvJlQEG9QTcAZ8rpj6NnAPHGX7TaYT7Hqb4jjq0iOAKfDY0qSd4GfgMIHM+CLvyI4AnIwbwIy13Fcn2KY7Tw6C4ygofclcc5ItMOBb4Pu/zRXd7ohZ66200VFQekuQm3OvtEqsfaXaztNzb7D7lEwHe5n0wsOpwQkNad8A3+VNuRI4MlOyWZam3akyMaN+ukslapZjLbDObBwDCOkDoLT2xO+R2CCvDdafdRQQ0iutAS2OwiVWBRx1N3PNTLsOmWrgQnKtn0Zw8XbqK2dp/eJiSDfen0tisB+BmFMj2qmZLvCRrsPWX5/KrLK78b96Y3IPJvUPSg9eH6QClw8AAAAASUVORK5CYII="/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAYtJREFUSEvtlu0xBEEQhp+LgBCIABEgAyLgIkAEiAARIAIyQARHBIRABupVPWp2bnZmeu7Hlir9c7e7n/7a7p0xkcwm4tILXgeOLOh74NObQA9Y0AWwYbAPYMcL94AFPAGOI2hIVPA74KY1gFbwHvAACF4SlfwQeK6VvgWsDG8jR2+W3as927YqbEU6c9MZ5dfAcqp+Sr6A04JDBXgNrJm++h6CWwqgBlbJds1qv6GEasmT6ctWNlkpgeNsL4GLWt/svfTOa1mXwLGDTUCT2yL6zN5NcTTgEjiUWcOk7D2i3mrYXgCV39XjAB41LkRStW3J+B/c0uu/V+p4Ta7SY1Unuz5zw5XuZi39x5b6RjoHdlTCoyV4Co4//tFoG4NIExgsoRQc79ozW/qNnKyajspVbteXwNo+7l+aBK/7Hbbe4MiUwKtkmrMdnMnccOmmendzLUgdGPX8V2r3uOaw+70XHN/oFFr840iVvWDZx3c6+PP8KPzY9IBlp2nVkpBoubinvxfc3dtgOBn4Gz7wWB9jGpQAAAAAAElFTkSuQmCC"/>
                <div className="user"> 
                    <img 
                    src={currentUser.profilePic} 
                    alt=""
                    />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;