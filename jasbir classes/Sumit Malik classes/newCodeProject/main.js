(function(){
    let btnAddFolder = document.querySelector("#addFolder");
    let btnAddTextFile = document.querySelector("#addTextFile");
    let divbreadcrumb = document.querySelector("#breadcrumb");
    let divContainer = document.querySelector("#container");
    let templates = document.querySelector("#templates");
    let resources = [];
    let cfid = -1; //intially we are at root (which has -1 id)
    let rid = 0;

    btnAddFolder.addEventListener("click", addFolder);
    btnAddTextFile.addEventListener("click", addTextFile);

    function addFolder(){
        let rname = prompt("Enter folder's name");

        if(rname!=null){
            rname = rname.trim(); // to remove spaces from fist and last of the folder 
            // so that we cannot add same name folder just adding some extra spaces
        }

        if(!rname){  //empty folder name validation
            alert("Empty name is not allowed")
            return
        }

        //uniqueness validation
        let alreadyExist = resources.some(f => f.rname == rname && f.pid ==cfid);
        if(alreadyExist){
            alert( rname + " already exist . Please use something different")
            return;
        }

        let pid = cfid;
        rid++;
        addFolderHtml(rname,rid , pid);
        resources.push({
            rname : rname,
            rid : rid,
            rtype : "folder",
            pid : cfid
        })
        saveToStorage();
           
    }

    function addTextFile(){
        let tfname = prompt("Enter text file's name");
        console.log(tfname);
    }

    function deleteFolder(){
        console.log("In delete" )

    }

    function deleteTextFile(){

    }

    function renameFolder(){
        let Newrname = prompt("Enter folder's name");
        if(Newrname!=null){
            Newrname = Newrname.trim(); 
        }

        if(!Newrname){  //empty folder name validation
            alert("Empty name is not allowed")
            return
        }

        let spanRename = this;
        let divFolder = spanRename.parentNode;
        let divName = divFolder.querySelector("[purpose=name]");
        let Oldrname = divName.innerHTML;
        let ridToBeUpdated = parseInt(divFolder.getAttribute("rid"));
        if(Newrname == Oldrname){
            alert("Please enter a new name");
            return;
        }

        let alreadyExist = resources.some(r => r.rname == Newrname && r.pid == cfid);
        if(alreadyExist){
            alert(Newrname + " already exists.")
            return;
        }

        //change html
        divName.innerHTML = Newrname;
        //change ram 
        let resource = resources.find(r => r.rid == ridToBeUpdated)
        resource.rname = Newrname;
        //change storage
        saveToStorage();

    }

    function renameTextFile(){

    }

    function viewFolder(){
        console.log("In view")
    }

    function viewTextFile(){

    }

    function addFolderHtml(rname,rid,pid){
        let divFolderTemplate = templates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let spanRename = divFolder.querySelector("[action=rename]");
        let spanDelete = divFolder.querySelector("[action=delete]");
        let spanView = divFolder.querySelector("[action=view]");
        let divName = divFolder.querySelector("[purpose=name]");

        spanDelete.addEventListener("click",deleteFolder)
        spanRename.addEventListener("click",renameFolder)
        spanView.addEventListener("click",viewFolder)
        divName.innerHTML = rname;
        divFolder.setAttribute("rid" , rid)
        divFolder.setAttribute("pid" , pid)
        
        divContainer.appendChild(divFolder);
    }

    function saveToStorage(){
        let rjson = JSON.stringify(resources); //used to convert jso to json string which can be saved 
        localStorage.setItem("data",rjson)

    }

    function loadFromStorage(){
        let rjson = localStorage.getItem("data")
        if(!rjson){
            return;
        }
        resources = JSON.parse(rjson);
        for(let i=0; i<resources.length ; i++){
            if(resources[i].pid == cfid){
                addFolderHtml(resources[i].rname, resources[i].rid , resources[i].pid)
            }
    
            if(resources[i].rid > rid){
                rid = resources[i].rid;
            }
        }
    }

    loadFromStorage();
})();
// to prevent namespace pollution