let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", e => {
    e.preventDefault()//先取消submit預設會送出資料的

    //取得form表單裡面的 備忘錄資料 月份 日期
    let form = document.querySelector("form");
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;

    //如果沒有輸入任何資料就提醒
    if (todoText === "") {
        alert("請輸入內容")
        return
    }

    //創建備忘錄
    let todo = document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("todo_text");
    text.innerText = todoText;
    let time = document.createElement("p");
    time.classList.add("todo_time");
    time.innerText = todoMonth + "/" + todoDate;



    //創建 打勾icon
    let check = document.createElement("button");
    check.innerHTML = '<i class="fa-solid fa-check"></i>';
    check.classList.add("check_class");
    //按下打勾icon 要變淡跟畫線的效果
    check.addEventListener("click", e => {
        let todo_item = e.target.parentElement;
        todo_item.classList.toggle("todo_line")
    })
    //創建 垃圾桶icon
    let trash = document.createElement("button");
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trash.classList.add("trash_class")
    //按下垃圾桶 要移除todo並縮小的動畫效果
    trash.addEventListener("click", e => {
        let todo_item = e.target.parentElement; //抓到父層todo
        todo_item.style.animation = "scaleDown 0.3s forwards";

        //動畫效果跑完後才跑函式裡面的內容
        todo_item.addEventListener("animationend", () => {
            //刪除localStorage裡的資料
            let text = todo_item.children[0].innerText;
            let myListArray = JSON.parse(localStorage.getItem("list"));
            myListArray.forEach((item,index) => {
                if (text == item.todoText) {
                    //console.log("看這裡index", index); //看這裡item {todoText: '111511', todoMonth: '5', todoDate: '5'}
                    //console.log("看這裡item", item); //0
                    myListArray.splice(index,1);
                    localStorage.setItem("list",JSON.stringify(myListArray));

                }
            })
            todo_item.remove();
        })

    })


    //push進去 section
    //let section = document.querySelector("section");
    section.appendChild(todo);
    todo.appendChild(text);
    todo.appendChild(time);

    //把打勾跟垃圾桶也push進去 section
    todo.appendChild(check);
    todo.appendChild(trash);

    //todo整個的縮放動畫
    todo.style.animation = "scaleUp 0.3s forwards";

    // 儲存進去localStorage資料＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    //1.創建一個Object,來儲存每一條備忘錄內容,然後在放進去陣列裡 key值:變數
    let myTodo = {
        todoText: todoText,
        todoMonth: todoDate,
        todoDate: todoDate
    }

    let myList = localStorage.getItem("list"); //設定一個變數 用途為取用localStorage裡key值為list的資料

    //如果 myList陣列為空代表沒有儲存任何一條備忘錄,如果有則設定新增一個,然後 並push進去陣列裡
    if (myList == null) {
        //把每個myTodo物件 放進去localStorage裡儲存, key值為list 
        //(把myTodo物件格式放進去陣列)然後把陣列轉換成格式存
        localStorage.setItem("list", JSON.stringify([myTodo]))
    } else {
        let myListArray = JSON.parse(myList) //已經轉換成原本格式的myList 陣列
        myListArray.push(myTodo);
        localStorage.setItem("list", JSON.stringify(myListArray));

    }


    // 儲存進去localStorage資料＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    //每次新增一條事項的時候,就自動清空內容
    form.children[0].value = "";

})

//取用localStorage資料
let myList = localStorage.getItem("list");
if (myList !== null) {
    let myListArray = JSON.parse(myList);
    myListArray.forEach(item => {

        //創建todo
        let todo = document.createElement("div");
        todo.classList.add("todo");
        //創建text
        let text = document.createElement("p");
        text.classList.add("todo_text");
        // item = myListArray裡面的item＝還原的myList=list=myTodo物件, todoText是item(myTodo)裡面的物件成員
        text.innerText = item.todoText;
        //創建日期time
        let time = document.createElement("p");
        time.classList.add("todo_time");
        time.innerText = item.todoMonth + "/" + item.todoDate;
        //text和time放進去todo裡面
        todo.appendChild(text);
        todo.appendChild(time);
        //創建 打勾icon
        let check = document.createElement("button");
        check.innerHTML = '<i class="fa-solid fa-check"></i>';
        check.classList.add("check_class");
        //按下打勾icon 要變淡跟畫線的效果
        check.addEventListener("click", e => {
            let todo_item = e.target.parentElement;
            todo_item.classList.toggle("todo_line")
        })
        //創建 垃圾桶icon
        let trash = document.createElement("button");
        trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
        trash.classList.add("trash_class")
        //按下垃圾桶 要移除todo並縮小的動畫效果
        trash.addEventListener("click", e => {
            let todo_item = e.target.parentElement; //抓到父層todo
            todo_item.style.animation = "scaleDown 0.3s forwards";

            //動畫效果跑完後才跑函式裡面的內容
            todo_item.addEventListener("animationend", () => {
                //刪除localStorage裡的資料
                let text = todo_item.children[0].innerText;
                let myListArray = JSON.parse(localStorage.getItem("list"));
                myListArray.forEach((item,index) => {
                    if (text == item.todoText) {
                        //console.log("看這裡index", index); //看這裡item {todoText: '111511', todoMonth: '5', todoDate: '5'}
                        //console.log("看這裡item", item); //0
                        myListArray.splice(index,1);
                        localStorage.setItem("list",JSON.stringify(myListArray));

                    }
                })
                todo_item.remove();
            })

        })

        //打勾和垃圾桶icon放進todo
        todo.appendChild(check);
        todo.appendChild(trash);

        //todo放進section
        section.appendChild(todo);
    })
}

//取用localStorage資料
