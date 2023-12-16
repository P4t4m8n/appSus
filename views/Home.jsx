
export function Home() {
    return (
        <div className="home-page">

            <nav>
                <div id="navdiv">
                    <a href="https://www.google.com/gmail/about/#" className="c">Gmail</a>
                    <a href="https://www.google.co.in/imghp?hl=en&tab=wi&ogbl" className="c">Images</a>
                    <div><img src="menu.png"/></div>
                    <div><button type="submit" name="button">Sign In</button></div>
                </div>
            </nav>

            <main>
                <center>
                    <img src="google.png" width="20%" height="5%" id="googleimg"/>
                    
                        <div>
                            <div id="maindiv">
                                <span><img src="assets\img\search24.png"></img></span>
                                <span id="inputspan"><input type="text" name="search"/></span>
                                <span><img src="mic.png"/></span>
                            </div>
                        </div>
                    
                        <section>
                            <div><button type="submit">Google Search</button></div>
                            <div><button type="submit">I'm feeling lucky</button></div>
                        </section>
                        <div><a href="">Work, learn and run your bussiness from home</a></div>
                        <div id="Bottomdiv">
                            <span>Google offered in:</span>
                            <ul>
                                <li><a href="">हिन्द</a>ी</li>
                                <li><a href="">বাংলা</a></li>
                                <li><a href="">తెలుగు</a></li>
                                <li><a href="">मराठी</a></li>
                                <li><a href="">தமிழ்</a></li>
                                <li><a href="">ગુજરાતી</a></li>
                                <li><a href="">ಕನ್ನಡ</a></li>
                                <li><a href="">മലയാളം</a></li>
                                <li><a href="">ਪੰਜਾਬੀ</a></li>
                            </ul>
                        </div>
                </center>
            </main>
        </div>
    )
}