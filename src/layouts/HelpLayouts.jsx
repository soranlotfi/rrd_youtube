import {Outlet,NavLink} from "react-router-dom";

const HelpLayouts = ()=>{
    return(
        <div className="help_layout">
            <h2>website Help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet deserunt officia provident sequi. Aut consequuntur facere ipsam quod? A accusamus ad aliquam atque aut cumque dolorum eveniet, explicabo, hic magni minus nemo quaerat quo quos repudiandae sequi sint sit temporibus ut voluptas. Aliquid amet aut delectus deleniti, ex illo ipsa iusto, minus pariatur quae ratione rem sed temporibus. Fuga?</p>

            <nav>
                <NavLink to="faq">view the faq</NavLink>
                <NavLink to="contact">contact us</NavLink>
            </nav>
            <Outlet/>
        </div>
    )

}
export default HelpLayouts;