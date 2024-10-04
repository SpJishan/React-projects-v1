import MenuList from "./menu-list";



export default function TreeView({menus=[]}){


    return <div>
        
        <div className="tree-view-container">
        
        <MenuList list={menus} />
        
        </div></div>
}