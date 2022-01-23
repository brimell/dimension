/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import icon from '../../assets/img/compass_icon.svg';
import './navbar.css';
import $ from 'jquery'; 

export default function navbar(props) {

    // ---------Responsive-navbar-active-animation-----------
    function test(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top":itemPosNewAnimTop.top + "px", 
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }
    $(document).ready(function(){
        setTimeout(function(){ test(); });
    });
    $(window).on('resize', function(){
        setTimeout(function(){ test(); }, 500);
    });
    $(".navbar-toggler").on('click', function(){
        $(".navbar-collapse").slideToggle(300);
        setTimeout(function(){ test(); });
    });


    // target.parent().addClass('active');

    return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
        <img src={icon} className="App-logo" alt="icon" />
        <h1 className="navbar-brand navbar-logo App-title" href="#">{props.title}</h1>
        <button style={{display: props.toggle ? 'block' : 'none'}} className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"></div>
                <li className="nav-item active">
                    <a className="nav-link" ><i className="fas fa-tachometer-alt"></i>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><i className="far fa-address-book"></i>Research</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><i className="far fa-clone"></i>Map</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

