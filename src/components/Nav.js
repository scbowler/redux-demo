import React from 'react';
import SetTheme from './SetTheme';
import { connect } from 'react-redux';

const Nav = props => {
    return (
        <nav className={props.navColor}>
            <div className="nav-wrapper">
                <span className={`brand-logo ${props.textColor}`}>The App</span>

                <ul className="right">
                    <li>
                        <a className={props.textColor} href="!#">Home</a>
                    </li>
                    <li>
                        <a className={props.textColor} href="!#">About</a>
                    </li>
                    <li>
                        <a className={props.textColor} href="!#">Contact</a>
                    </li>
                    <li>
                        <SetTheme/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

function mapStateToProps(state){
    console.log('STATE:', state);
    return {
        navColor: state.theme.theme.nav,
        textColor: state.theme.theme.text
    }
}

export default connect(mapStateToProps)(Nav);
