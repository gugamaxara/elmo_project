import React from "react";

import "./about.css"

class AboutUs extends React.Component{
    render(){
        return(
            <div className="about" id="about-page">
                <div className="aboutUsInfo">
                    <h1>ჩვენ შესახებ</h1>
                    <p>
                        ჩვენი კომპანია მოხმარებელს სთავაზობს ნებისმიერი სახის ელექტროსამონტაჟო სამუშაოებს მთელი საქართველოს მაშტაბით.
                        ჩვენი კომპანია ელექტროსაინჟინრო ბაზარზე 2019 წლიდან ფუნქციონირეს. ამ დროის განმავლობაში, ჩვენ ჩამოვაყალიბეთ
                        პროფესიონალებით დაკომპლექტებული გუნდი, რომელიც ასრულებენ სამუშაოს სწრაფად და ხარისხიანად, სრული საერთაშორისო
                        სტანდარტების მიხედვით.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutUs;
