import MenuList from "./menu-list";
import "./styles.css";



export default function TreeView({menus=[]}){


    return <div>
        <div className="heading">
      <h1>Tree view component/menu UI component / recursive navigation menu</h1>
    </div>
        
        <div className="tree-view-container">
        
        <MenuList list={menus} />
        
        </div></div>
}