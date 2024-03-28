
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import menuImg from '../../../assets/menu/menu-bg.png';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
           <SectionTitle  subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
           
        </div>
    );
};

export default Menu;