import { observer } from "mobx-react-lite";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer(function NavBar(){
    const {userStore: {user, logout}} = useStore();
    const navigate = useNavigate();

    const handleLogoutUser = (event: any) => {
        event.preventDefault();
        logout();
        navigate("/",{replace: true});
      }

    return (
       <Menu inverted fixed='top' >
           <Container>
                <Menu.Item as={NavLink} to='/' header>
                   <img src='/assets/logo.png' alt="logo" style={{marginRight: '10px'}}></img>
                   Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink}  to='/activities' name='/Activities' />
                <Menu.Item>
                   <Button positive content='Create Activity' as={NavLink} to='/activities/activityEdit' ></Button>
                </Menu.Item>
                <Menu.Item as={NavLink} to='/errors' name="errors" />   
                <Menu.Item position="right">
                    <Image src={user?.image || '/assets/user.png'} avatar spaced='right'/>
                    <Dropdown pointing='top left' text={user?.displayName}> 
                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to={`/profile/${user?.userName}`} text='My Profile' icon='user' />
                            <Dropdown.Item onClick={handleLogoutUser} text='Logout' icon='pover' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>            
           </Container>
       </Menu> 
    )
})