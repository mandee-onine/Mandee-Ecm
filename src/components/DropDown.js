import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const DropdownBar = () => (
    <div className="container-fluid">
        <Menu style={{ fontSize: "13px", }}>
            <Dropdown text='SHOP BY CATEGORY' style={{ background: "green", color: "white" }}>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Dropdown text='Flours'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Dropdown text='Sooji, Besan & Maida'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="/Besan">Besan</Menu.Item>
                                            <Menu.Item href="#">Dried Chickpease Dal</Menu.Item>
                                            <Menu.Item href="#">Plain Sugar</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Atta'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Whole Wheat Atta</Menu.Item>
                                            <Menu.Item href="#">Speciality Atta</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Other Flours'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Rice Flour</Menu.Item>
                                            <Menu.Item href="#">Speciality Flour</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Dropdown text='Pulses'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Dropdown text='Dals'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Dried Chickpeas Dal</Menu.Item>
                                            <Menu.Item href="#">Chana Dal</Menu.Item>
                                            <Menu.Item href="#">Moong Dal</Menu.Item>
                                            <Menu.Item href="#">Other Dals</Menu.Item>
                                            <Menu.Item href="#">Urad Dal</Menu.Item>
                                            <Menu.Item href="#">Toor Dal</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Whole Pulses'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Chana Whole</Menu.Item>
                                            <Menu.Item href="#">Dried Chickpeas Whole</Menu.Item>
                                            <Menu.Item href="#">Kabuli Chana</Menu.Item>
                                            <Menu.Item href="#">Moong</Menu.Item>
                                            <Menu.Item href="#">Other Whole Pulses</Menu.Item>
                                            <Menu.Item href="#">Urad White Whole</Menu.Item>
                                            <Menu.Item href="#">Urad Black WHole</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown text='Sugar, Salt & Jaggery'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Dropdown text='Sugar'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Plain Sugar</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Jaggery'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Plain Jaggery</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Salt'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Plain Salt</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown text='Cereals'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Dropdown text='Other Cereals'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Millets</Menu.Item>
                                            <Menu.Item href="#">Puffed Rice</Menu.Item>
                                            <Menu.Item href="#">Sabudana</Menu.Item>
                                            <Menu.Item href="#">Poha</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Rice'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Basmati Rice</Menu.Item>
                                            <Menu.Item href="#">Boiled Rice</Menu.Item>
                                            <Menu.Item href="#">Idly Rice</Menu.Item>
                                            <Menu.Item href="#">Raw Rice</Menu.Item>
                                            <Menu.Item href="#">Stream Rice</Menu.Item>
                                            <Menu.Item href="#">Traditional Rice</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Raw Material'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">RM Chana</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown text='Spices & Dry Fruits'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Dropdown text='Whole Spices'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Black Pepper</Menu.Item>
                                            <Menu.Item href="#">Cardamom</Menu.Item>
                                            <Menu.Item href="#">Chilly</Menu.Item>
                                            <Menu.Item href="#">Clove</Menu.Item>
                                            <Menu.Item href="#">Coriander</Menu.Item>
                                            <Menu.Item href="#">Cumin(Jeera)</Menu.Item>
                                            <Menu.Item href="#">Fennel(Saunf)</Menu.Item>
                                            <Menu.Item href="#">Fenugreek(Methi)</Menu.Item>
                                            <Menu.Item href="#">Mustard</Menu.Item>
                                            <Menu.Item href="#">Other Whole Spices</Menu.Item>
                                            <Menu.Item href="#">Tamarind</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Other Dry Fruits'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Fig</Menu.Item>
                                            <Menu.Item href="#">Mixed</Menu.Item>
                                            <Menu.Item href="#">Raisin</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Plain Nuts'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Almond</Menu.Item>
                                            <Menu.Item href="#">Cashew</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown text='Noodles & Vermicelli'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Dropdown text='Vermicelli'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Plain Vermicelli</Menu.Item>
                                            <Menu.Item href="#">Roasted Vermicelli</Menu.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Dropdown text='Noodles'>
                                        <Dropdown.Menu>
                                            <Menu.Item href="#">Plain Noodles</Menu.Item>
                                            <Menu.Item href="#">Other Noodles</Menu.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Link to="/Besan"><Menu.Item>Besan</Menu.Item></Link>
            <Link to="/DriedChickPeaseDal"><Menu.Item>Dried Chickpease Dal</Menu.Item></Link>
            <Link to="/PlainSugar"><Menu.Item>Plain Sugar</Menu.Item></Link>
            <Link to="/BoiledRice"><Menu.Item>Boiled Rice</Menu.Item></Link>
            <Link to="/RawRice"><Menu.Item>Raw Rice</Menu.Item></Link>
            <Link to="/UradDal"><Menu.Item>Urad Dal</Menu.Item></Link>
            <Link to="/ToorDal"><Menu.Item>Toor Dal</Menu.Item></Link>
            <Menu.Item style={{ background: "green", marginLeft: "333px", color: "white" }}>Call Center: <i class="fas fa-phone" /> 8690-222-222</Menu.Item>

        </Menu >
    </div>
)

export default DropdownBar;

