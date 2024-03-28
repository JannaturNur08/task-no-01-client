
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Menu = () => {
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            
            {/* main cover */}
           <SectionTitle  subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
           
        </div>
    );
};

export default Menu;