import React from "react";
import TopNavBar from "./Navbars/TopNavBar";
import SideBar from "./Navbars/SideBar";
import { Outlet } from "react-router-dom";

const Base = () => {
    return (
        <>
            <div id="wrapper">
                <SideBar />

                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <TopNavBar />
                        
                        <div class="container-fluid bg-color">
                            <Outlet></Outlet>
                        </div>
                      
                    </div>

                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2023</span>
                            </div>
                        </div>
                    </footer>


                </div>

            </div>
        </>
    );
};

export default Base;