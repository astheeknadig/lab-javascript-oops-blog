/* Fill your code*/
class Blog{
    constructor(title,details){
        this.title = title;
        this.details = details;
    }

    addTitle(){
        var title_ele = document.createElement('h1');
        title_ele.setAttribute("id","blog-title");
        document.getElementById('card-text').appendChild(title_ele);
        title_ele.innerHTML += this.title;
    }

    addDescription(){
        var des_ele = document.createElement('p');
        des_ele.setAttribute('id','blog-despriction');
        document.getElementById('card-text').appendChild(des_ele);
        des_ele.innerHTML += this.details;
    }
}

document.getElementById('addBlog').onclick = () => {
    document.getElementById("popupContact").style.display="block";
}

document.getElementById('close').onclick = () => {
    document.getElementById("popupContact").style.display="none";
}

document.getElementById('post').onclick = () => {
    document.getElementById("popupContact").style.display="none";
    var t = document.getElementById('title').value;
    var d = document.getElementById('detail').value;
    var b = new Blog(t,d)
    b.addTitle();
    b.addDescription();
    document.getElementById('detail').value = "";
    document.getElementById('title').value = "";
}