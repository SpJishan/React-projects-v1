import Sidebar from "./Sidebar";
import "./styles2.css";


export default function SideMenu(){


    return (
        <div className="main2">
          <Sidebar />
          <div className="container2">
            <h1 className="title2">Sidebar Menu</h1>
            <p className="info">The purpose of the sidebar is to show users the available information within a section of pages and provide a way for them to view it.</p>
            <button className="btn2">Explore now</button>
          </div>
        </div>
      )
}